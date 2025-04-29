import { journalState } from '~widgets/journal/journal.store'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useJournalTableData from '~features/use-journal-table-data'

import { journalTableColumns } from '~models/journal'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Journal() {
	const data = useJournalTableData(journalState.list)

	return (
		<RenderFetchData
			isLoading={journalState.loading}
			countData={journalState.count}
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
