import { account } from '@stroy/models'
import { API_URL } from '@stroy/system'
import { createRequestFx } from '@stroy/toolkit'

export const createCommonRequestFx = createRequestFx({
	baseURL: API_URL,
	token: account.access_token,
})
