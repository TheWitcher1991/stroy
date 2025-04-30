import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { tagServiceKeys } from '~models/tag/tag.config'
import { TagRepository } from '~models/tag/tag.repository'
import { UseTags } from '~models/tag/tag.types'
import { userServiceKeys } from '~models/user'

export const useTags = (params?: Partial<UseTags>) => {
	return useQuery({
		queryKey: [tagServiceKeys.tags, params],
		queryFn: () => TagRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useTag = (id: number) => {
	return useQuery({
		queryKey: [userServiceKeys.tag, id],
		queryFn: () => TagRepository.getById(id),
		enabled: !!id,
	})
}
