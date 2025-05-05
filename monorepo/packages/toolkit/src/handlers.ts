import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export const axiosErrorHandler = (e: AxiosError): string => {
	if (!e.response) return 'Возникла ошибка'

	if (typeof e.response === 'string') return e.response

	const res: ValidationErrorResponse = e.response
		.data as ValidationErrorResponse

	if (typeof res === 'string') return res

	if (res['detail'] && typeof res['detail'] === 'string') return res['detail']

	if (Array.isArray(res) && res[0]) return res[0]

	if (typeof res === 'object') {
		const keys = Object.keys(res)

		if (keys.length > 0) {
			const f = res[keys[0]]

			if (typeof f === 'string') return `${keys[0]}: ${f}`

			if (Array.isArray(f)) {
				if (f[0]) return `${keys[0]}: ${f[0]}`
			}
		}
	}

	return 'Возникла ошибка'
}

export type Query = {
	onError?: (error: AxiosError) => void
	onFinally?: () => void
	errorText?: string
	processError?: boolean
}

export async function query(fn: () => void, options: Query = {}) {
	const { onError, onFinally, errorText, processError = true } = options

	try {
		await fn()
	} catch (e) {
		errorText && alert(errorText)
		onError && !processError && onError?.(e)

		if (axios.isAxiosError(e)) {
			processError && !onError && toast.error(axiosErrorHandler(e))
		} else {
			processError && !onError && toast.error('Возникла ошибка')
		}
	} finally {
		onFinally && onFinally?.()
	}
}
