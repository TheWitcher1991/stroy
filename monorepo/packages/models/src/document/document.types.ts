import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import {
	CreateDocumentSchema,
	DocumentSchema,
	DocumentVersionSchema,
	UpdateDocumentSchema,
} from './document.schema'
import { DocumentStatus } from './document.utils'

export type DocumentID = Branded<number, 'DocumentID'>

export type DocumentVersionID = Branded<number, 'DocumentVersionID'>

export type IDocument = z.infer<typeof DocumentSchema>

export type IDocumentVersion = z.infer<typeof DocumentVersionSchema>

export type IUpdateDocument = z.infer<typeof UpdateDocumentSchema>

export type ICreateDocument = z.infer<typeof CreateDocumentSchema>

export interface PropsWithDocument {
	document: IDocument
}

export interface PropsWithDocumentVersion {
	version: IDocumentVersion
}

export interface PropsWithDocumentId {
	document: DocumentID
}

export interface PropsWithDocumentVersionId {
	version: DocumentVersionID
}

export interface UseDocuments extends UseModelOptions {
	view: 'table' | 'list'
	status: undefined | DocumentStatus
}
