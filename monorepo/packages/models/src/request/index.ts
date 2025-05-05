import { account, AuthRepository, login, logout } from '../auth'
import { href } from '@stroy/href/src'
import { API_URL } from '@stroy/system'
import { HTTP } from '@stroy/toolkit'

const config = {
	baseURL: `${API_URL}/`,
	withCredentials: true,
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken',
	timeoutErrorMessage: 'Превышено время ожидания ответа от сервера',
	headers: {
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
		Accept: 'application/json',
	},
}

export const http = new HTTP({
	config: config,
	onRequest: (config: any) => {
		const access_token = account?.access_token || ''
		const token_type = account?.token_type || 'Bearer'
		if (access_token) {
			config.headers.Authorization = `${token_type} ${access_token}`
		}
		return config
	},
	onRejected: async (error: any) => {
		const originalRequest = error.config

		if (!error.response) {
			return Promise.reject(error)
		}

		if (error.response.status === 403) {
			window.location.replace(href.login)
			return Promise.reject(error)
		}

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			try {
				const _http = HTTP.create(config)

				const response = await AuthRepository.refresh()

				if (response.status !== 200) {
					throw new Error('Не удалось обновить токен авторизации')
				}

				const newAccessToken = response.data.access_token

				login({
					access_token: newAccessToken,
					access_expires: response.data.access_expires,
				})

				window.location.reload()

				return _http(originalRequest)
			} catch (refreshError) {
				logout()
				window.location.replace(href.login)
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	},
})
