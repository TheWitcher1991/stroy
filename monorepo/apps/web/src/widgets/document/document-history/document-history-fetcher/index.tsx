'use client'

import { useEffect } from 'react'

import { useDocumentHistoryStore } from '~widgets/document/document-history/index.hooks'
import { documentHistoryActions } from '~widgets/document/document-history/index.store'

import { PropsWithDocument, useJournal } from '@stroy/models'

export default function DocumentHistoryFetcher({
	document,
}: PropsWithDocument) {
	const { filter } = useDocumentHistoryStore()

	const { data, isLoading, isError } = useJournal({
		...filter,
		document_id: document.id,
	})

	const { setList, setCount, setLoading, setError } = documentHistoryActions

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
