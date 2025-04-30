import { z } from 'zod'

import { DocumentSchema } from '~models/document'
import { GuardSchema } from '~models/guard'

import { zShape } from '~packages/schemas'

const BaseUserSchema = z.object({
	first_name: zShape.name,
	last_name: zShape.name,
	email: zShape.email,
})

export const UserDocumentSchema = z.object({
	document: DocumentSchema,
	permissions: GuardSchema.shape.operations,
})

export const UserSchema = BaseUserSchema.extend({
	id: zShape.id,
	documents: UserDocumentSchema.array(),
	guard: GuardSchema.nullable(),
	date_joined: zShape.datetime,
})

export const UpdateUserSchema = BaseUserSchema.extend({
	guard: zShape.id.optional(),
})

export const CreateUserSchema = BaseUserSchema.extend({
	guard: zShape.id.optional(),
	password: zShape.password,
})
