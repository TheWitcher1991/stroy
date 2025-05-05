import { SelectOption } from '@stroy/types'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { tagServiceKeys } from './tag.config'
import { TagRepository } from './tag.repository'
import { UseTags } from './tag.types'

export const useTags = (params?: Partial<UseTags>) => {
	return useQuery({
		queryKey: [tagServiceKeys.tags, params],
		queryFn: () => TagRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useTag = (id: number) => {
	return useQuery({
		queryKey: [tagServiceKeys.tag, id],
		queryFn: () => TagRepository.getById(id),
		enabled: !!id,
	})
}

export const useSelectableTags = (params?: Partial<UseTags>) => {
	const [tags, setTags] = useState<SelectOption[]>([])
	const { isLoading, data } = useTags(params)

	useEffect(() => {
		if (!isLoading && data?.data) {
			setTags(
				data.data.map(tag => ({
					value: tag.id.toString(),
					content: tag.title,
				})),
			)
		}
	}, [isLoading, data])

	return {
		tags,
		isLoading,
	}
}
