import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@stroy/toolkit'

import { userServiceKeys } from './user.config'
import { UserRepository } from './user.repository'
import { ICreateUser, IUpdateUser, UserID } from './user.types'

export const useCreateUser = () => {
	return useMutation({
		mutationFn: (data: ICreateUser) => UserRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[userServiceKeys.users]])
		},
	})
}

export const useUpdateUser = (id: UserID) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateUser>) =>
			UserRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[userServiceKeys.users],
				[userServiceKeys.user, id],
			])
		},
	})
}

export const useDeleteUser = () => {
	return useMutation({
		mutationFn: (id: number) => UserRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[userServiceKeys.users]])
		},
	})
}
