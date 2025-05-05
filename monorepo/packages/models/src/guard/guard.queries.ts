import { SelectOption } from '@stroy/types'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { guardServiceKeys } from './guard.config'
import { GuardRepository } from './guard.repository'
import { UseGuards } from './guard.types'

export const useGuards = (params?: Partial<UseGuards>) => {
	return useQuery({
		queryKey: [guardServiceKeys.guards, params],
		queryFn: () => GuardRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useGuard = (id: number) => {
	return useQuery({
		queryKey: [guardServiceKeys.guard, id],
		queryFn: () => GuardRepository.getById(id),
		enabled: !!id,
	})
}

export const useSelectableGuards = (params?: Partial<UseGuards>) => {
	const [guards, setGuards] = useState<SelectOption[]>([])
	const { isLoading, data } = useGuards(params)

	useEffect(() => {
		if (!isLoading && data?.data) {
			setGuards(
				data.data.map(tag => ({
					value: tag.id.toString(),
					content: tag.title,
				})),
			)
		}
	}, [isLoading, data])

	return {
		guards,
		isLoading,
	}
}
