import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { userServiceKeys } from '~models/user/user.config'
import { UserRepository } from '~models/user/user.repository'
import { UseUsers } from '~models/user/user.types'

export const useUsers = (params?: Partial<UseUsers>) => {
	return useQuery({
		queryKey: [userServiceKeys.users, params],
		queryFn: () => UserRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useUser = (id: number) => {
	return useQuery({
		queryKey: [userServiceKeys.user, id],
		queryFn: () => UserRepository.getById(id),
		enabled: !!id,
	})
}
