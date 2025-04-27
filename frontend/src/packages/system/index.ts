export const IS_DEV = process.env.NODE_ENV === 'development'

export const IS_PROD = process.env.NODE_ENV === 'production'

export const API_URL = `${process.env.API_URL || 'http://localhost:8000'}/v1`

export const BASE_ROOT_URL = '/'

export const PAGE_SIZE_OPTIONS = [30, 60, 90]
