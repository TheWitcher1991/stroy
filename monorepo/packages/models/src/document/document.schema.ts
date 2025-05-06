import { GuardSchema } from '../guard'
import { ProjectSchema } from '../project'
import { TagSchema } from '../tag'
import { UserSchema } from '../user'
import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

import { DocumentStatus, DocumentType } from './document.utils'

const BaseDocumentSchema = z.object({
	title: zShape.title,
})

export const DocumentVersionSchema = z.object({
	version_number: z.number(),
	file_path: zShape.url,
	modified_by: UserSchema,
	created_at: zShape.datetime,
})

export const DocumentSchema = BaseDocumentSchema.extend({
	id: zShape.id,
	file_path: zShape.url,
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
	project: zShape.id,
	tag: zShape.id,
	author: zShape.id.optional(),
	status: z.nativeEnum(DocumentStatus).optional(),
})

export const CreateDocumentSchema = BaseDocumentSchema.extend({
	file: zShape.document,
	project: zShape.id,
	tag: zShape.id,
	author: zShape.id.optional(),
	status: z.nativeEnum(DocumentStatus).optional(),
})
