import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'

import { journalTableColumns } from '~models/journal'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Journal() {
	return (
		<RenderFetchData
			isLoading={false}
			countData={1}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={[]}
				columns={journalTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
