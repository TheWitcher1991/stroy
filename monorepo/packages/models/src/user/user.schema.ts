import { DocumentSchema } from '../document'
import { GuardSchema } from '../guard'
import { zShape } from '@stroy/toolkit'
import { z } from 'zod'

const BaseUserSchema = z.object({
	first_name: zShape.name,
	last_name: zShape.name,
	email: zShape.email,
})

export const UserDocumentSchema = z.object({
	document: DocumentSchema,
	permissions: GuardSchema.shape.permissions,
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
