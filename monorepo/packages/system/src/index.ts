export const IS_CLIENT = typeof window !== 'undefined'

export const IS_DEV = process.env.NODE_ENV === 'development'

export const IS_PROD = process.env.NODE_ENV === 'production'

export const API_URL = `${process.env.API_URL || 'http://localhost:8000'}/v1`

export const BASE_ROOT_URL = '/'

export const PAGE_SIZE_OPTIONS = [30, 60, 90]

export const IMAGE_FILE_TYPES = ['image/jpeg', 'image/png']

export const STROY_PLUS_AMOUNT = 399

export const RUBLE = '₽'

export const STROY_PLUS = `${STROY_PLUS_AMOUNT} ${RUBLE}`

export const DOCUMENT_FILE_TYPES = [
	'application/pdf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/vnd.ms-excel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'text/plain',
	'text/csv',
	'text/tab-separated-values',
	'image/jpeg',
	'image/png',
]
