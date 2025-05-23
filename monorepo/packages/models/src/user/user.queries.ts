import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { SelectOption } from '@stroy/types'

import { userServiceKeys } from './user.config'
import { UserRepository } from './user.repository'
import { UserID, UseUsers } from './user.types'
import { userFullName } from './user.utils'

export const useUsers = (params?: Partial<UseUsers>) => {
	return useQuery({
		queryKey: [userServiceKeys.users, params],
		queryFn: () => UserRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useUser = (id: UserID) => {
	return useQuery({
		queryKey: [userServiceKeys.user, id],
		queryFn: () => UserRepository.getById(id),
		enabled: !!id,
	})
}

export const useSelectableUsers = (params?: Partial<UseUsers>) => {
	const [users, setUsers] = useState<SelectOption[]>([])
	const { isLoading, data } = useUsers(params)

	useEffect(() => {
		if (!isLoading && data?.data) {
			setUsers(
				data.data.results.map(user => ({
					value: user.id.toString(),
					content: userFullName(user),
				})),
			)
		}
	}, [isLoading, data])

	return {
		users,
		isLoading,
	}
}
