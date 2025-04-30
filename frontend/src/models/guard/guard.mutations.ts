import { useMutation } from '@tanstack/react-query/src'

import { guardServiceKeys } from '~models/guard/guard.config'
import { GuardRepository } from '~models/guard/guard.repository'
import { ICreateGuard, IUpdateGuard } from '~models/guard/guard.types'

import { optimisticInvalidateQueries } from '~packages/lib'

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
