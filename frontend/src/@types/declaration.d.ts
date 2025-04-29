import React, { JSXElementConstructor } from 'react'

declare module '*.css'
declare module '*.scss'
declare module '*.sass'

declare global {
	type Nullable<T> = T | null

	type EnumType<T> = T[keyof T]

	export type Dictionary<T = unknown> = Record<string, T>

	type ImageData =
		| import('next/dist/shared/lib/get-img-props').StaticImport
		| string

	type OnUploadProgress = (
		progress: number,
		uploaded: number,
		total: number,
	) => void

	interface ErrorType {
		code: string
		message: string
		type: string
	}

	type ErrorList = ErrorType[]

	interface ResultResponse<T> {
		result: T
		error_list: ErrorList
		is_error: boolean
		time_generated: string
	}

	type ListResponse<T> = ResultResponse<{
		count: number
		pages: number
		next: Nullable<string>
		previous: Nullable<string>
		results: T[]
	}>

	interface PaginationLimitOffset {
		limit: Nullable<string>
		offset: Nullable<string>
	}

	interface PaginationPageSize {
		page: number
		page_size: number
	}

	type ModelListField<T, U extends Dictionary<any>> = {
		count: number
		loading: boolean
		fetching?: boolean
		list: T[]
		filter: U
		checked?: number[]
	}

	type ModelListState<T, U extends Dictionary<any>> = {
		setCount: (count: number) => void
		setLoading: (loading: boolean) => void
		setFetching: (fetching: boolean) => void
		setChecked: (checked: number[]) => void
		setList: (list: T[]) => void
		setFilter: (filter: U) => void
		reset: () => void
	} & ModelListField<T, U>

	export interface UseModelOptions<ORDERING = string>
		extends PaginationPageSize {
		query: string
		ordering: ORDERING
	}

	type ValidationErrorResponse =
		| string
		| string[]
		| Dictionary<string>
		| Dictionary<string[]>

	interface ReactElement<
		P = any,
		T extends string | JSXElementConstructor<any> =
			| string
			| JSXElementConstructor<any>,
	> {
		type: T
		props: P
		key: string | null
	}

	namespace JSX {
		interface Element extends React.ReactElement<any, any> {}
	}
}

export {}
