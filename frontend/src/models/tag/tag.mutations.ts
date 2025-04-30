import { useMutation } from '@tanstack/react-query/src'

import { tagServiceKeys } from '~models/tag/tag.config'
import { TagRepository } from '~models/tag/tag.repository'
import { ICreateTag, IUpdateTag } from '~models/tag/tag.types'

import { optimisticInvalidateQueries } from '~packages/lib'

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
