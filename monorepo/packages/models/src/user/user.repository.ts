import { http } from '../request'
import { CrudRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { userServiceKeys } from './user.config'
import { ICreateUser, IUpdateUser, IUser, UseUsers } from './user.types'

const UserRepositoryBuilder = () => {
	return new CrudRepository<
		ListResponse<IUser>,
		IUser,
		ICreateUser,
		IUpdateUser,
		UseUsers
	>(http.instance, userServiceKeys.users)
}

export const UserRepository = UserRepositoryBuilder()
