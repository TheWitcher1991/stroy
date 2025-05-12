'use client'

import FinancesTransactions, {
	FinancesTransactionsFetcher,
	FinancesTransactionsPagination,
} from '~widgets/finances/finances-transactions'

export default function TransactionsPage() {
	return (
		<>
			<FinancesTransactionsFetcher />
			<FinancesTransactions />
			<FinancesTransactionsPagination />
		</>
	)
}
