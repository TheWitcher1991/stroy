import { GuardSchema } from '../guard'
import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

import { UserRole } from './user.utils'

const BaseUserSchema = z.object({
	first_name: zShape.name,
	last_name: zShape.name,
	email: zShape.email,
	role: z.nativeEnum(UserRole),
})

export const UserDocumentSchema = z.object({
	document: z.object({}),
	permissions: GuardSchema.shape.permissions,
})

export const UserSchema = BaseUserSchema.extend({
	id: zShape.id,
	avatar: zShape.url.nullable(),
	documents: UserDocumentSchema.array(),
	guard: GuardSchema.nullable(),
	date_joined: zShape.datetime,
	last_login: zShape.datetime,
})

export const UpdateUserSchema = BaseUserSchema.extend({
	guard: zShape.id.optional(),
	avatar: zShape.image.optional(),
})

export const CreateUserSchema = BaseUserSchema.extend({
	guard: zShape.id.optional(),
	password: zShape.password,
	avatar: zShape.image.optional(),
})
