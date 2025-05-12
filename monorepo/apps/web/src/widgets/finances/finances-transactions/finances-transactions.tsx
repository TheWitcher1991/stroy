import { usePaymentsStore } from '~widgets/finances/finances-transactions/finances-transactions.hooks'

import PaymentList from '~features/payment-list'
import TableSkeleton from '~features/table-skeleton'

import { RenderFetchData } from '~packages/lib'

export default function FinancesTransactions() {
	const { list, loading, error, count } = usePaymentsStore()

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
			loadingFallback={<TableSkeleton />}
		>
			<PaymentList payments={list} />
		</RenderFetchData>
	)
}
