import { zDepartmentId } from '../department'
import { UserRole, zUserId } from '../user'
import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

export const LoginSchema = z.object({
	email: zShape.email,
	password: zShape.password,
})

export const SignupSchema = z.object({
	first_name: zShape.name,
	last_name: zShape.name,
	email: zShape.email,
	password: zShape.password,
	department_name: zShape.name,
})

export const AccountSchema = z.object({
	access_token: z.string(),
	session_expires: z.number(),
	access_expires: z.number(),
	token_type: z.string(),
	role: z.nativeEnum(UserRole),
	user: zUserId,
	department: zDepartmentId,
	department_name: z.string(),
})
