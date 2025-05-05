'use client'

import { useEffect } from 'react'

import { tagsActions, useTagsStore } from '~widgets/tags'

import { useTags } from '@stroy/models'

export default function TagsFetcher() {
	const { filter } = useTagsStore()

	const { data, isLoading, isError } = useTags(filter)

	const { setList, setCount, setLoading, setError } = tagsActions

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
