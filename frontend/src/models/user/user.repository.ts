import { userServiceKeys } from '~models/user/user.config'
import {
	ICreateUser,
	IUpdateUser,
	IUser,
	UseUsers,
} from '~models/user/user.types'

import { http } from '~packages/lib'
import { CrudRepository } from '~packages/repositories'

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
