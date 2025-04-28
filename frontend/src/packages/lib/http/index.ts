import axios from 'axios'
import type {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	CreateAxiosDefaults,
} from 'axios'

type HTTPConstructor<T extends AxiosResponse = AxiosResponse> = {
	config?: CreateAxiosDefaults
	axios?: AxiosInstance
	onRequest?: ((value: T) => T | Promise<T>) | null
	onRejected?: ((error: any) => any) | null
}

export class HTTP {
	constructor(private options: HTTPConstructor) {
		this.options = options
	}

	public get instance(): AxiosInstance {
		if (this.options.axios) {
			return this.options.axios
		}

		let instance = axios.create(this.options.config)

		instance.interceptors.request.use(
			(config: any) => {
				if (this.options.onRequest) {
					return this.options.onRequest(config)
				}

				return config
			},
			error => Promise.reject(error),
		)

		instance.interceptors.response.use(
			response => response,
			error => {
				if (this.options.onRejected) {
					return this.options.onRejected(error)
				}

				return Promise.reject(error)
			},
		)

		return instance
	}

	public static create(config?: CreateAxiosDefaults) {
		return axios.create(config)
	}

	public restoreInstance(originalRequest: any) {
		return this.instance.request(originalRequest)
	}

	public get<T = any>(url: string, config?: AxiosRequestConfig<any>) {
		return this.instance.get<T, AxiosResponse<T>>(url, config)
	}

	public delete<T = any>(url: string, config?: AxiosRequestConfig<any>) {
		return this.instance.delete<T, AxiosResponse<T>>(url, config)
	}

	public post<T = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig<any>,
	) {
		return this.instance.post<T, AxiosResponse<T>>(url, data, config)
	}

	public put<T = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig<any>,
	) {
		return this.instance.put<T, AxiosResponse<T>>(url, data, config)
	}

	public patch<T = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig<any>,
	) {
		return this.instance.patch<T, AxiosResponse<T>>(url, data, config)
	}
}
