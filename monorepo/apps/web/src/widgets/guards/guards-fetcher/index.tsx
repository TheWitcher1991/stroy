'use client'

import { useEffect } from 'react'

import { guardsActions, guardsState } from '~widgets/guards'

import { useGuards } from '@stroy/models'

export default function GuardsFetcher() {
	const { setList, setCount, setLoading, setError } = guardsActions
	const { data, isLoading, isError } = useGuards(guardsState.filter)

	useEffect(() => {
		setLoading(isLoading)
		setError(isError)
		if (!isLoading && data?.data) {
			setCount(data.data.length)
			setList(data.data)
		}
	}, [data, isLoading, isError])

	return null
}
