import type { ReactNode } from 'react'
import type { UseFormRegister } from 'react-hook-form'

export type Nullable<T> = T | null

export type EnumType<T> = T[keyof T]

export type Dictionary<T = unknown> = Record<string, T>

export interface SelectProps<
	VALUE extends string[] = string[],
	REGISTER = any,
> {
	defaultValue?: VALUE[]
	value?: VALUE[]
	errorMessage?: ReactNode
	onSelect?: (value: VALUE[]) => void
	register?: UseFormRegister<REGISTER>
}

export interface SelectOption<ValueType extends string = string> {
	value: ValueType
	content?: ReactNode
	children?: ReactNode
	disabled?: boolean
	title?: string
}

export type OnUploadProgress = (
	progress: number,
	uploaded: number,
	total: number,
) => void

export interface ModalProps {
	open: boolean
	onClose: () => void
}

export interface ErrorType {
	code: string
	message: string
	type: string
}

export type ErrorList = ErrorType[]

export interface ResultResponse<T> {
	result: T
	error_list: ErrorList
	is_error: boolean
	time_generated: string
}

export type ListResponse<T> = {
	count: number
	pages: number
	next: Nullable<string>
	previous: Nullable<string>
	results: T[]
}

export interface PaginationLimitOffset {
	limit: Nullable<string>
	offset: Nullable<string>
}

export interface PaginationPageSize {
	page: number
	page_size: number
}

export type ModelListField<T, U extends Dictionary<any>> = {
	count: number
	loading: boolean
	error: boolean
	fetching?: boolean
	list: T[]
	filter: U
	checked?: number[]
}

export type ModelListState<T, U extends Dictionary<any>> = {
	setCount: (count: number) => void
	setError: (error: boolean) => void
	setLoading: (loading: boolean) => void
	setFetching: (fetching: boolean) => void
	setChecked: (checked: number[]) => void
	setList: (list: T[]) => void
	setFilter: (filter: U) => void
	reset: () => void
} & ModelListField<T, U>

export interface UseModelOptions<ORDERING = string> extends PaginationPageSize {
	query: string
	ordering: ORDERING
}

export type ValidationErrorResponse =
	| string
	| string[]
	| Dictionary<string>
	| Dictionary<string[]>
