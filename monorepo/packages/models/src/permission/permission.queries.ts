import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { permissionServiceKeys } from './permission.config'
import { PermissionRepository } from './permission.repository'
import { UsePermissions } from './permission.types'

export const usePermissions = (params?: Partial<UsePermissions>) => {
	return useQuery({
		queryKey: [permissionServiceKeys.permissions, params],
		queryFn: () => PermissionRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const usePermission = (id: number) => {
	return useQuery({
		queryKey: [permissionServiceKeys.permission, id],
		queryFn: () => PermissionRepository.getById(id),
		enabled: !!id,
	})
}
