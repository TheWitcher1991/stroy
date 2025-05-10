import { http } from '../request'

import { CrudRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { permissionServiceKeys } from './permission.config'
import {
	ICreatePermission,
	IPermission,
	IUpdatePermission,
	UsePermissions,
} from './permission.types'

const PermissionRepositoryBuilder = () => {
	return new CrudRepository<
		ListResponse<IPermission>,
		IPermission,
		ICreatePermission,
		IUpdatePermission,
		UsePermissions
	>(http.instance, permissionServiceKeys.permissions)
}

export const PermissionRepository = PermissionRepositoryBuilder()
