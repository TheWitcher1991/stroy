import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'

import { userTableColumns } from '~models/user'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Users() {
	return (
		<RenderFetchData
			isLoading={false}
			countData={1}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={[]}
				columns={userTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
