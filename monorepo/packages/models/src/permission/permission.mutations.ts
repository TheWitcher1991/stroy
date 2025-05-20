import { documentServiceKeys } from '../document'
import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@stroy/toolkit'

import { permissionServiceKeys } from './permission.config'
import { PermissionRepository } from './permission.repository'
import { ICreatePermission, IUpdatePermission } from './permission.types'

export const useCreatePermission = () => {
	return useMutation({
		mutationFn: (data: ICreatePermission) =>
			PermissionRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[documentServiceKeys.documents],
				[permissionServiceKeys.permissions],
			])
		},
	})
}

export const useUpdatePermission = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdatePermission>) =>
			PermissionRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[documentServiceKeys.documents],
				[documentServiceKeys.document],
				[permissionServiceKeys.permissions],
				[permissionServiceKeys.permission, id],
			])
		},
	})
}

export const useDeletePermission = () => {
	return useMutation({
		mutationFn: (id: number) => PermissionRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[documentServiceKeys.documents],
				[permissionServiceKeys.permissions],
			])
		},
	})
}
