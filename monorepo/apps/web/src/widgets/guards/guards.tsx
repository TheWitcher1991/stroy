import { useGuardsStore } from '~widgets/guards/guards.hooks'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useGuardTableData from '~features/use-guard-table-data'

import { guardTableColumns } from '~models/guard'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Guards() {
	const { count, list, loading, error } = useGuardsStore()

	const data = useGuardTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
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
