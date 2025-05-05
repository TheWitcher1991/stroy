'use client'

import { useEffect } from 'react'

import { tagsActions, tagsState } from '~widgets/tags'

import { useTags } from '@stroy/models'

export default function TagsFetcher() {
	const { setList, setCount, setLoading, setError } = tagsActions
	const { data, isLoading, isError } = useTags(tagsState.filter)

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
