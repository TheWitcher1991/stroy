import { useMutation } from '@tanstack/react-query'

import { userServiceKeys } from '~models/user/user.config'
import { UserRepository } from '~models/user/user.repository'
import { ICreateUser, IUpdateUser } from '~models/user/user.types'

import { optimisticInvalidateQueries } from '~packages/lib'

export const useCreateUser = () => {
	return useMutation({
		mutationFn: (data: ICreateUser) => UserRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[userServiceKeys.users]])
		},
	})
}

export const useUpdateUser = (id: number) => {
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
