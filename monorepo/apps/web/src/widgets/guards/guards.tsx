import { useGuardsStore } from '~widgets/guards/guards.hooks'

import { useGuardTableData } from '~features/guard'
import { ModelTable, TableSkeleton } from '~features/shared'

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
