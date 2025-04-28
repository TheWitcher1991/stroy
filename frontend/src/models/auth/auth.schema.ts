import { z } from 'zod'

import { zShape } from '~packages/schemas'

export const LoginSchema = z.object({
	email: zShape.email,
	password: zShape.password,
})

export const SignupSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: zShape.email,
	password: zShape.password,
	department_name: z.string(),
})

export const AccountSchema = z.object({
	access_token: z.string(),
	session_expires: z.number(),
	access_expires: z.number(),
	token_type: z.string(),
	user: z.number(),
	department: z.number(),
})
