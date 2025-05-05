import { optimisticInvalidateQueries } from '@stroy/toolkit'
import { useMutation } from '@tanstack/react-query/src'

import { documentServiceKeys } from './document.config'
import { DocumentRepository } from './document.repository'
import { ICreateDocument, IUpdateDocument } from './document.types'

export const useCreateDocument = () => {
	return useMutation({
		mutationFn: (data: ICreateDocument) => DocumentRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[documentServiceKeys.documents]])
		},
	})
}

export const useUpdateDocument = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateDocument>) =>
			DocumentRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[documentServiceKeys.documents],
				[documentServiceKeys.document, id],
			])
		},
	})
}

export const useDeleteDocument = () => {
	return useMutation({
		mutationFn: (id: number) => DocumentRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[documentServiceKeys.documents]])
		},
	})
}
