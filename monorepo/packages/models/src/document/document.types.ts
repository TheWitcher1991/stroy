import { UseModelOptions } from '@stroy/types'
import { z } from 'zod'

import {
	CreateDocumentSchema,
	DocumentSchema,
	UpdateDocumentSchema,
} from './document.schema'

export type IDocument = z.infer<typeof DocumentSchema>

export type IUpdateDocument = z.infer<typeof UpdateDocumentSchema>

export type ICreateDocument = z.infer<typeof CreateDocumentSchema>

export interface PropsWithDocument {
	document: IDocument
}

export interface UseDocuments extends UseModelOptions {}
