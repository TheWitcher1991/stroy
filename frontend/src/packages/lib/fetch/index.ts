import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { API_URL } from '~packages/system'

type fetchCoreQueryOptions = {
	endpoint?: string
	credentials?: RequestCredentials
	token_type?: string
	mode?: RequestMode
	cache?: RequestCache
	isAuthorized?: boolean
}

export const fetchCoreQuery = ({
	endpoint = '',
	credentials = 'include',
	token_type = 'Bearer',
	mode = 'cors',
	cache = 'no-cache',
	isAuthorized = true,
}: fetchCoreQueryOptions) => {
	return fetchBaseQuery({
		baseUrl: `${API_URL}/${endpoint}`,
		prepareHeaders: (headers, { getState }) => {
			if (isAuthorized) {
				const token = ''
				if (token) {
					headers.set('authorization', `${token_type} ${token}`)
				}
			}
			headers.set('content-type', 'application/json')
			headers.set('accept', 'application/json')
			return headers
		},
		mode: mode,
		cache: cache,
		credentials: credentials,
	})
}

type fetchCoreOptions = {
	url: string
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
	token_type?: string
	headers?: HeadersInit
	body?: any
	cache?: RequestCache
	credentials?: RequestCredentials
	isAuthorized?: boolean
}
