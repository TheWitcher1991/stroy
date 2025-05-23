import { GuardSchema, zGuardId } from '../guard'
import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

import { UserRole } from './user.utils'

export const zUserId = zBrand(zShape.id, 'UserID')

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
	id: zUserId,
	avatar: zShape.url.nullable(),
	documents: UserDocumentSchema.array(),
	guard: GuardSchema.nullable(),
	date_joined: zShape.datetime,
	last_login: zShape.datetime,
})

export const UpdateUserSchema = BaseUserSchema.extend({
	guard: zGuardId.optional(),
	avatar: zShape.image.optional(),
})

export const CreateUserSchema = BaseUserSchema.extend({
	guard: zGuardId.optional(),
	password: zShape.password,
	avatar: zShape.image.optional(),
})
