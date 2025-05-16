import { createEvent, createStore, sample } from 'effector'
import { ChangeEvent } from 'react'

import { Dictionary, ModelListField } from '@stroy/types'

export const createModelListApi = <T, U extends Dictionary<any>>(
	initialState: ModelListField<T, Partial<U>>,
) => {
	const setCount = createEvent<number>()
	const setList = createEvent<T[]>()
	const setFilter = createEvent<Partial<U>>()
	const setLoading = createEvent<boolean>()
	const setFetching = createEvent<boolean>()
	const setError = createEvent<boolean>()
	const setChecked = createEvent<number[]>()
	const reset = createEvent<void>()

	const setQuery = createEvent<string>()
	const changeQueryFromInput = createEvent<ChangeEvent<HTMLInputElement>>()

	const $store = createStore<ModelListField<T, Partial<U>>>(initialState)

	$store.on(setCount, (state, count) => ({ ...state, count }))
	$store.on(setList, (state, list) => ({ ...state, list }))
	$store.on(setChecked, (state, checked) => ({ ...state, checked }))
	$store.on(setLoading, (state, loading) => ({ ...state, loading }))
	$store.on(setFetching, (state, fetching) => ({ ...state, fetching }))
	$store.on(setError, (state, error) => ({ ...state, error }))
	$store.on(setFilter, (state, filter) => ({
		...state,
		filter: { ...state.filter, ...filter },
	}))
	$store.on(setQuery, (state, query) => ({
		...state,
		filter: { ...state.filter, query },
	}))
	$store.on(reset, () => initialState)

	sample({
		clock: changeQueryFromInput,
		fn: e => e.target.value,
		target: setQuery,
	})

	return {
		setCount,
		setList,
		setFilter,
		setQuery,
		changeQueryFromInput,
		setLoading,
		setFetching,
		setError,
		setChecked,
		reset,
		$store,
	}
}
