'use client'

import { useEffect } from 'react'

import {
	setCount,
	setError,
	setList,
	setLoading,
	useJournalStore,
} from '~widgets/journal'

import { useJournal } from '@stroy/models'

export default function JournalFetcher() {
	const { filter } = useJournalStore()

	const { data, isLoading, isError } = useJournal(filter)

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
