import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'

import { tagTableColumns } from '~models/tag'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Tags() {
	return (
		<RenderFetchData
			isLoading={false}
			countData={1}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={[]}
				columns={tagTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
