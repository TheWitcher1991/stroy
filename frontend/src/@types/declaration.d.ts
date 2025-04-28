import React, { JSXElementConstructor } from 'react'

declare module '*.css'
declare module '*.scss'
declare module '*.sass'

declare global {
	type Nullable<T> = T | null

	type EnumType<T> = T[keyof T]

	type ImageData =
		| import('next/dist/shared/lib/get-img-props').StaticImport
		| string

	type OnUploadProgress = (
		progress: number,
		uploaded: number,
		total: number,
	) => void

	type ModelListField<
		T,
		U extends Record<string, any>,
		M extends Record<string, any> = Record<string, any>,
	> = {
		count: number
		loading: boolean
		fetching?: boolean
		list: T[]
		filter: U
		meta: M
		checked?: number[]
	}

	interface PaginationLimitOffset {
		limit: Nullable<string>
		offset: Nullable<string>
	}

	interface PaginationPageSize {
		page: number
		page_size: number
	}

	type ModelListState<
		T,
		U extends Record<string, any>,
		M extends Record<string, any> = Record<string, any>,
	> = {
		setCount: (count: number) => void
		setLoading: (loading: boolean) => void
		setFetching: (fetching: boolean) => void
		setChecked: (checked: number[]) => void
		setList: (list: T[]) => void
		setMeta: (meta: M) => void
		setFilter: (filter: U) => void
		reset: () => void
	} & ModelListField<T, U, M>

	export interface UseModelOptions<ORDERING = string>
		extends PaginationPageSize {
		query: string
		ordering: ORDERING
	}

	type ValidationErrorResponse =
		| string
		| string[]
		| Record<string, string>
		| Record<string, string[]>

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
