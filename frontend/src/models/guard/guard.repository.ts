import { guardServiceKeys } from '~models/guard/guard.config'
import {
	ICreateGuard,
	IGuard,
	IUpdateGuard,
	UseGuards,
} from '~models/guard/guard.types'

import { http } from '~packages/lib'
import { CrudRepository } from '~packages/repositories'

const GuardRepositoryBuilder = () => {
	return new CrudRepository<
		IGuard[],
		IGuard,
		ICreateGuard,
		IUpdateGuard,
		UseGuards
	>(http.instance, guardServiceKeys.guards)
}

export const GuardRepository = GuardRepositoryBuilder()
