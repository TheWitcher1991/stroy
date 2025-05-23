import { http } from '../request'

import { CrudRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { userServiceKeys } from './user.config'
import { ICreateUser, IUpdateUser, IUser, UseUsers } from './user.types'

export const UserRepository = new CrudRepository<
	ListResponse<IUser>,
	IUser,
	ICreateUser,
	IUpdateUser,
	UseUsers
>(http.instance, userServiceKeys.users)
