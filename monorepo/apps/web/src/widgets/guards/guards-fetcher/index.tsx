'use client'

import { useEffect } from 'react'

import { guardsActions } from '~widgets/guards'
import { useGuardsStore } from '~widgets/guards/guards.hooks'

import { useGuards } from '@stroy/models'

export default function GuardsFetcher() {
	const { filter } = useGuardsStore()

	const { data, isLoading, isError } = useGuards(filter)

	const { setList, setCount, setLoading, setError } = guardsActions

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
