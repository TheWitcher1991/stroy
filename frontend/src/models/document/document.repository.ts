import { documentServiceKeys } from '~models/document/document.config'
import {
	ICreateDocument,
	IDocument,
	IUpdateDocument,
	UseDocuments,
} from '~models/document/document.types'

import { http } from '~packages/lib'
import { CrudRepository } from '~packages/repositories'

const DocumentRepositoryBuilder = () => {
	return new CrudRepository<
		ListResponse<IDocument>,
		IDocument,
		ICreateDocument,
		IUpdateDocument,
		UseDocuments
	>(http.instance, documentServiceKeys.documents)
}

export const DocumentRepository = DocumentRepositoryBuilder()
