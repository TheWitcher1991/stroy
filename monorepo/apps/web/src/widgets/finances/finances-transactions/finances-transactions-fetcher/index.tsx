'use client'

import { useEffect } from 'react'

import { usePaymentsStore } from '~widgets/finances/finances-transactions/finances-transactions.hooks'
import { paymentsActions } from '~widgets/finances/finances-transactions/finances-transactions.store'

import { usePayments } from '@stroy/models'

export default function FinancesTransactionsFetcher() {
	const { filter } = usePaymentsStore()

	const { data, isLoading, isError } = usePayments(filter)

	const { setList, setCount, setLoading, setError } = paymentsActions

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
