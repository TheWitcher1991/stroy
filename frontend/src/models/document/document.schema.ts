import { z } from 'zod'

import { GuardSchema } from '~models/guard'
import { ProjectSchema } from '~models/project'
import { TagSchema } from '~models/tag'
import { UserSchema } from '~models/user'

import { zShape } from '~packages/schemas'

export const DocumentStatus = {
	DRAFT: 'DRAFT',
	HARMONIZATION: 'HARMONIZATION',
	APPROVED: 'APPROVED',
} as const

export type DocumentStatus = EnumType<typeof DocumentStatus>

const BaseDocumentSchema = z.object({
	title: zShape.title,
	status: z.nativeEnum(DocumentStatus),
})

export const DocumentVersionSchema = z.object({
	version_number: z.number(),
	file_path: zShape.url,
	modified_by: UserSchema,
	modified_at: zShape.datetime,
})

export const DocumentSchema = BaseDocumentSchema.extend({
	id: zShape.id,
	file_path: zShape.url,
	doc_number: z.string(),
	doc_type: z.string(),
	version: DocumentVersionSchema.nullable(),
	project: ProjectSchema,
	author: UserSchema,
	tag: TagSchema.nullable(),
	permissions: GuardSchema.shape.operations,
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
