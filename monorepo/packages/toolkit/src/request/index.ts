import { createEffect } from 'effector'

type CreateRequestParams = RequestInit & {
	url: string
	baseUrl?: string
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
	createEffect<P, R>(params => {
		const { url, baseUrl, ...fetchOptions } = getConfig(payload, params)

		const newHeaders = new Headers(headers)

		if (token) {
			newHeaders.append('Authorization', `Bearer ${token}`)
		}

		return fetch(`${baseUrl}/${url}`, {
			...fetchOptions,
			headers: newHeaders,
			baseURL,
		})
	})

export const createRequestFx =
	(params: CreateRequestFxParams) =>
	<P = CreateRequestParams, R = void>(payload: Payload<P>) =>
		createRequestInstance<P, R>({
			...(params as CreateRequestParams),
			payload,
		})
