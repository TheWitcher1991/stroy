'use client'

import { useEffect } from 'react'

import { documentsActions, documentsState } from '~widgets/documents'

import { useDocuments } from '@stroy/models'

export default function DocumentsFetcher() {
	const { setList, setCount, setLoading, setError } = documentsActions
	const { data, isLoading, isError } = useDocuments(documentsState.filter)

	useEffect(() => {
		setLoading(isLoading)
		setError(isError)
		if (!isLoading && data?.data) {
			setCount(data.data.count)
			setList(data.data.results)
		}
	}, [data, isLoading, isError])

	return null
}
