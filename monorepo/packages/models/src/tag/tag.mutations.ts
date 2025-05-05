import { optimisticInvalidateQueries } from '@stroy/toolkit'
import { useMutation } from '@tanstack/react-query'

import { tagServiceKeys } from './tag.config'
import { TagRepository } from './tag.repository'
import { ICreateTag, IUpdateTag } from './tag.types'

export const useCreateTag = () => {
	return useMutation({
		mutationFn: (data: ICreateTag) => TagRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[tagServiceKeys.tags]])
		},
	})
}

export const useUpdateTag = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateTag>) =>
			TagRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[tagServiceKeys.tags],
				[tagServiceKeys.tag, id],
			])
		},
	})
}

export const useDeleteTag = () => {
	return useMutation({
		mutationFn: (id: number) => TagRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[tagServiceKeys.tags]])
		},
	})
}
