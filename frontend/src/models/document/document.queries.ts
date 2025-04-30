import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { documentServiceKeys } from '~models/document/document.config'
import { DocumentRepository } from '~models/document/document.repository'
import { UseDocuments } from '~models/document/document.types'

export const useDocuments = (params?: Partial<UseDocuments>) => {
	return useQuery({
		queryKey: [documentServiceKeys.documents, params],
		queryFn: () => DocumentRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useDocument = (id: number) => {
	return useQuery({
		queryKey: [documentServiceKeys.document, id],
		queryFn: () => DocumentRepository.getById(id),
		enabled: !!id,
	})
}
