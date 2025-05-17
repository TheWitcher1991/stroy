import { account } from '@stroy/models'
import { BASE_ROOT_URL } from '@stroy/system'
import { createRequestFx } from '@stroy/toolkit'

export const createCommonRequestFx = createRequestFx({
	baseUrl: BASE_ROOT_URL,
	token: account.access_token,
})
