'use client'

import { useMount } from 'ahooks'

import FinancesTransactions, {
	FinancesTransactionsFetcher,
	FinancesTransactionsPagination,
} from '~widgets/finances/finances-transactions'
import { setBreadcrumbs } from '~widgets/nav'

import { generatePaymentBreakdown } from '@stroy/models'

export default function TransactionsPage() {
	useMount(() => {
		setBreadcrumbs(generatePaymentBreakdown('transactions'))
	})

	return (
		<>
			<FinancesTransactionsFetcher />
			<FinancesTransactions />
			<FinancesTransactionsPagination />
		</>
	)
}
