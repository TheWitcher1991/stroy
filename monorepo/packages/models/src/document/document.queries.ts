import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { documentServiceKeys } from './document.config'
import { DocumentRepository } from './document.repository'
import { DocumentID, UseDocuments } from './document.types'

export const useDocuments = (params?: Partial<UseDocuments>) => {
	return useQuery({
		queryKey: [documentServiceKeys.documents, params],
		queryFn: () => DocumentRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useDocument = (id: DocumentID) => {
	return useQuery({
		queryKey: [documentServiceKeys.document, id],
		queryFn: () => DocumentRepository.getById(id),
		enabled: !!id,
	})
}
