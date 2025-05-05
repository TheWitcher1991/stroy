import { useJournalStore } from '~widgets/journal/journal.hooks'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useJournalTableData from '~features/use-journal-table-data'

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
