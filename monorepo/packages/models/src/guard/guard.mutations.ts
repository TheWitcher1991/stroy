import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@stroy/toolkit'

import { guardServiceKeys } from './guard.config'
import { GuardRepository } from './guard.repository'
import { GuardID, ICreateGuard, IUpdateGuard } from './guard.types'

export const useCreateGuard = () => {
	return useMutation({
		mutationFn: (data: ICreateGuard) => GuardRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[guardServiceKeys.guards]])
		},
	})
}

export const useUpdateGuard = (id: GuardID) => {
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
