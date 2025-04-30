'use client'

import { useEffect } from 'react'

import { journalActions, journalState } from '~widgets/journal'

import { useJournal } from '~models/journal'

export default function JournalFetcher() {
	const { setList, setCount, setLoading, setError } = journalActions
	const { data, isLoading, isError } = useJournal(journalState.filter)

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
