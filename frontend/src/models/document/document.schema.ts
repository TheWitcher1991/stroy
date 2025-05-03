import { z } from 'zod'

import { DocumentStatus } from '~models/document/document.utils'
import { GuardSchema } from '~models/guard'
import { ProjectSchema } from '~models/project'
import { TagSchema } from '~models/tag'
import { UserSchema } from '~models/user'

import { zShape } from '~packages/schemas'

const BaseDocumentSchema = z.object({
	title: zShape.title,
	status: z.nativeEnum(DocumentStatus),
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
	doc_type: z.string(),
	version_number: z.number(),
	size: z.number(),
	versions: DocumentVersionSchema.array(),
	project: ProjectSchema,
	author: UserSchema,
	tag: TagSchema.nullable(),
	permissions: GuardSchema.shape.permissions,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateDocumentSchema = BaseDocumentSchema.extend({
	project: zShape.id,
	tag: zShape.id,
	author: zShape.id,
})

export const CreateDocumentSchema = BaseDocumentSchema.extend({
	project: zShape.id,
	tag: zShape.id,
	author: zShape.id,
})
