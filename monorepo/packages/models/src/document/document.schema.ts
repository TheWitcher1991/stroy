import { GuardSchema } from '../guard'
import { ProjectSchema, zProjectId } from '../project'
import { TagSchema, zTagId } from '../tag'
import { UserSchema, zUserId } from '../user'
import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

import { DocumentStatus, DocumentType } from './document.utils'

export const zDocumentId = zBrand(zShape.id, 'DocumentID')

export const zDocumentVersionId = zBrand(zShape.id, 'DocumentVersionID')

const BaseDocumentSchema = z.object({
	title: zShape.title,
})

export const DocumentVersionSchema = z.object({
	id: zDocumentVersionId,
	version_number: z.number(),
	file: zShape.url,
	doc_title: zShape.title,
	doc_type: z.nativeEnum(DocumentType),
	content_type: z.string(),
	size: z.number(),
	modified_by: UserSchema,
	created_at: zShape.datetime,
})

export const DocumentSchema = BaseDocumentSchema.extend({
	id: zDocumentId,
	file: zShape.url,
	doc_number: z.string(),
	doc_type: z.nativeEnum(DocumentType),
	content_type: z.string(),
	version_number: z.number(),
	size: z.number(),
	versions: DocumentVersionSchema.array(),
	project: ProjectSchema,
	author: UserSchema,
	tag: TagSchema.nullable(),
	permissions: GuardSchema.shape.permissions,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
	status: z.nativeEnum(DocumentStatus),
})

export const UpdateDocumentSchema = BaseDocumentSchema.extend({
	file: zShape.document.optional(),
	project: zProjectId,
	tag: zTagId,
	author: zUserId.optional(),
	status: z.nativeEnum(DocumentStatus).optional(),
})

export const CreateDocumentSchema = BaseDocumentSchema.extend({
	file: zShape.document,
	project: zProjectId,
	tag: zTagId,
	author: zUserId.optional(),
	status: z.nativeEnum(DocumentStatus).optional(),
})
