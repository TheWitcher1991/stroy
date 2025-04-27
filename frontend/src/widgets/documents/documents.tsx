import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'

import { documentTableColumns } from '~models/document'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Documents() {
	return (
		<RenderFetchData
			isLoading={false}
			countData={1}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={[]}
				columns={documentTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
