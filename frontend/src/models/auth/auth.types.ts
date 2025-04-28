import { z } from 'zod'

import {
	AccountSchema,
	LoginSchema,
	SignupSchema,
} from '~models/auth/auth.schema'

export type ILogin = z.infer<typeof LoginSchema>

export type ISignup = z.infer<typeof SignupSchema>

export type IAccount = z.infer<typeof AccountSchema>
