import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@stroy/toolkit'
import { OnUploadProgress } from '@stroy/types'

import { documentServiceKeys } from './document.config'
import { DocumentRepository } from './document.repository'
import { DocumentID, ICreateDocument, IUpdateDocument } from './document.types'

export const useCreateDocument = () => {
	return useMutation({
		mutationFn: (data: ICreateDocument) => DocumentRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[documentServiceKeys.documents]])
		},
	})
}

export const useCreateDocumentFormData = () => {
	return useMutation({
		mutationFn: ({
			data,
			onUploadProgress,
		}: {
			data: FormData
			onUploadProgress?: OnUploadProgress
		}) => DocumentRepository.createFormData(data, onUploadProgress),
		onSettled: async () => {
			await optimisticInvalidateQueries([[documentServiceKeys.documents]])
		},
	})
}

export const useUpdateDocument = (id: DocumentID) => {
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

export const useUpdateDocumentFormData = (id: DocumentID) => {
	return useMutation({
		mutationFn: ({
			data,
			onUploadProgress,
		}: {
			data: FormData
			onUploadProgress?: OnUploadProgress
		}) => DocumentRepository.updateFormData(id, data, onUploadProgress),
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
