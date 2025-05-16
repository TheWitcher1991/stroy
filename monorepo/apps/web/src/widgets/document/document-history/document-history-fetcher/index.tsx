'use client'

import { useEffect } from 'react'

import { useDocumentHistoryStore } from '~widgets/document/document-history/index.hooks'
import {
	setCount,
	setError,
	setList,
	setLoading,
} from '~widgets/document/document-history/index.store'

import { PropsWithDocument, useJournal } from '@stroy/models'

export default function DocumentHistoryFetcher({
	document,
}: PropsWithDocument) {
	const { filter } = useDocumentHistoryStore()

	const { data, isLoading, isError } = useJournal({
		...filter,
		document_id: document.id,
	})

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
