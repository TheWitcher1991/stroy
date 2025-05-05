'use client'

import { useEffect } from 'react'

import { journalActions, useJournalStore } from '~widgets/journal'

import { useJournal } from '@stroy/models'

export default function JournalFetcher() {
	const { filter } = useJournalStore()

	const { data, isLoading, isError } = useJournal(filter)

	const { setList, setCount, setLoading, setError } = journalActions

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
