import { guardsState } from '~widgets/guards/guards.store'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useGuardTableData from '~features/use-guard-table-data'

import { guardTableColumns } from '~models/guard'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Guards() {
	const data = useGuardTableData(guardsState.list)

	return (
		<RenderFetchData
			isLoading={guardsState.loading}
			countData={guardsState.count}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={data}
				columns={guardTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
