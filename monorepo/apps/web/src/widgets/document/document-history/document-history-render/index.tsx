import { useDocumentHistoryStore } from '~widgets/document/document-history/index.hooks'

import { useJournalTableData } from '~features/journal'
import { ModelTable, TableSkeleton } from '~features/shared'

import { journalTableColumns } from '~models/journal'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function DocumentHistoryRender() {
	const { list, error, loading } = useDocumentHistoryStore()

	const data = useJournalTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
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
