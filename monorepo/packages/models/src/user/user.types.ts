import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import { CreateUserSchema, UpdateUserSchema, UserSchema } from './user.schema'

export type UserID = Branded<number, 'UserID'>

export type IUser = z.infer<typeof UserSchema>

export type IUpdateUser = z.infer<typeof UpdateUserSchema>

export type ICreateUser = z.infer<typeof CreateUserSchema>

export interface UseUsers extends UseModelOptions {}

export interface PropsWithUser {
	user: IUser
}

export interface PropsWithUserId {
	user: UserID
}
