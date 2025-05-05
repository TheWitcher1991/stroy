import { optimisticInvalidateQueries } from '@stroy/toolkit'
import { useMutation } from '@tanstack/react-query'

import { guardServiceKeys } from './guard.config'
import { GuardRepository } from './guard.repository'
import { ICreateGuard, IUpdateGuard } from './guard.types'

export const useCreateGuard = () => {
	return useMutation({
		mutationFn: (data: ICreateGuard) => GuardRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[guardServiceKeys.guards]])
		},
	})
}

export const useUpdateGuard = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateGuard>) =>
			GuardRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[guardServiceKeys.guards],
				[guardServiceKeys.guard, id],
			])
		},
	})
}

export const useDeleteGuard = () => {
	return useMutation({
		mutationFn: (id: number) => GuardRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[guardServiceKeys.guards]])
		},
	})
}
