import { EnumType } from '@stroy/types'

import { DocumentID } from './document.types'

export const DocumentStatus = {
	DRAFT: 'DRAFT',
	ARCHIVE: 'ARCHIVE',
	HARMONIZATION: 'HARMONIZATION',
	APPROVED: 'APPROVED',
} as const

export type DocumentStatus = EnumType<typeof DocumentStatus>

export const DocumentStatusMapper: Record<DocumentStatus, string> = {
	DRAFT: 'Черновик',
	ARCHIVE: 'Архив',
	HARMONIZATION: 'На утверждении',
	APPROVED: 'Утвержден',
}

export const DocumentType = {
	image: 'image',
	pdf: 'pdf',
	word: 'word',
	excel: 'excel',
	video: 'video',
	audio: 'audio',
	text: 'text',
	other: 'other',
	unknown: 'unknown',
}

export type DocumentType = keyof typeof DocumentType

export const toDocumentID = (id: number | string): DocumentID =>
	Number(id) as DocumentID
