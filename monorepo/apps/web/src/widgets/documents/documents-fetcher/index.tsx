'use client'

import { useEffect } from 'react'

import { setCount, setError, setList, setLoading } from '~widgets/documents'
import { useDocumentsStore } from '~widgets/documents/documents.hooks'

import { useDocuments } from '@stroy/models'

export default function DocumentsFetcher() {
	const { filter } = useDocumentsStore()

	const { data, isLoading, isError } = useDocuments(filter)

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
