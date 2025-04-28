import href from '~packages/href'
import { HTTP } from '~packages/lib/http'
import { API_URL } from '~packages/system'

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
		const access_token = ''
		const token_type = 'Bearer'
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

				window.location.reload()

				return _http(originalRequest)
			} catch (refreshError) {
				window.location.replace(href.login)
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	},
})
