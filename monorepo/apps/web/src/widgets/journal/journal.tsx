import { useJournalStore } from '~widgets/journal/journal.hooks'

import { useJournalTableData } from '~features/journal'
import { ModelTable, TableSkeleton } from '~features/shared'

import { journalTableColumns } from '~models/journal'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Journal() {
	const { list, error, loading, count } = useJournalStore()

	const data = useJournalTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={data}
				columns={journalTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
