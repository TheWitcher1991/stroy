import { http } from '../request'

import { CrudRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { documentServiceKeys } from './document.config'
import {
	ICreateDocument,
	IDocument,
	IUpdateDocument,
	UseDocuments,
} from './document.types'

export const DocumentRepository = new CrudRepository<
	ListResponse<IDocument>,
	IDocument,
	ICreateDocument,
	IUpdateDocument,
	UseDocuments
>(http.instance, documentServiceKeys.documents)
