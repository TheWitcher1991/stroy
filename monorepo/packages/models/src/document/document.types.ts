import { z } from 'zod'

import { UseModelOptions } from '@stroy/types'

import {
	CreateDocumentSchema,
	DocumentSchema,
	DocumentVersionSchema,
	UpdateDocumentSchema,
} from './document.schema'

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
	document: number
}

export interface UseDocuments extends UseModelOptions {
	view: 'table' | 'list'
}
