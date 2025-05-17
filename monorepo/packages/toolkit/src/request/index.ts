import axios, { type AxiosRequestConfig } from 'axios'
import { createEffect } from 'effector'

type CreateRequestParams = AxiosRequestConfig & {
	url: string
}

type Fn<P> = (params: P) => CreateRequestParams

type Payload<P> = CreateRequestParams | Fn<P>

type CreateRequestInstanceParams<P> = CreateRequestParams & {
	token?: string
	payload: Payload<P>
}

type CreateRequestFxParams = Omit<
	CreateRequestInstanceParams<CreateRequestParams>,
	'payload' | 'url'
>

const getConfig = <P>(payload: Payload<P>, params: P): CreateRequestParams =>
	typeof payload === 'function' ? payload(params) : payload

const createRequestInstance = <P = CreateRequestParams, R = void>({
	baseURL,
	headers,
	payload,
	token,
}: CreateRequestInstanceParams<P>) =>
	createEffect<P, R>(async params => {
		const { url, ...axiosConfig } = getConfig(payload, params)

		const newHeaders = { ...headers }

		if (token) {
			newHeaders['Authorization'] = `Bearer ${token}`
		}

		const response = await axios.request<R>({
			url,
			baseURL,
			headers: newHeaders,
			...axiosConfig,
		})

		return response.data
	})

export const createRequestFx =
	(params: CreateRequestFxParams) =>
	<P = CreateRequestParams, R = any>(payload: Payload<P>) =>
		createRequestInstance<P, R>({
			...(params as CreateRequestParams),
			payload,
		})
