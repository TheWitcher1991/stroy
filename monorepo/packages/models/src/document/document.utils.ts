import { EnumType } from '@stroy/types'

export const DocumentStatus = {
	DRAFT: 'DRAFT',
	HARMONIZATION: 'HARMONIZATION',
	APPROVED: 'APPROVED',
} as const

export type DocumentStatus = EnumType<typeof DocumentStatus>

export const DocumentStatusMapper: Record<DocumentStatus, string> = {
	DRAFT: 'Черновик',
	HARMONIZATION: 'На утверждении',
	APPROVED: 'Утвержден',
}
