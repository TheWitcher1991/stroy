import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'

import { guardTableColumns } from '~models/guard'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Guards() {
	return (
		<RenderFetchData
			isLoading={false}
			countData={1}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={[]}
				columns={guardTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
