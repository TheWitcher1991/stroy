import { z } from 'zod'

import {
	CreateUserSchema,
	UpdateUserSchema,
	UserSchema,
} from '~models/user/user.schema'

export type IUser = z.infer<typeof UserSchema>

export type IUpdateUser = z.infer<typeof UpdateUserSchema>

export type ICreateUser = z.infer<typeof CreateUserSchema>

export interface UseUsers extends UseModelOptions {}
