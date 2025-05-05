import { zShape } from '@stroy/toolkit'
import { z } from 'zod'

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
	user: z.number(),
	department: z.number(),
	department_name: z.string(),
})
