import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { guardServiceKeys } from '~models/guard/guard.config'
import { GuardRepository } from '~models/guard/guard.repository'
import { UseGuards } from '~models/guard/guard.types'

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
