import { useTagsStore } from '~widgets/tags/tags.hooks'

import { ModelTable, TableSkeleton } from '~features/shared'
import { useTagTableData } from '~features/tag'

import { tagTableColumns } from '~models/tag'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Tags() {
	const { list, count, loading, error } = useTagsStore()

	const data = useTagTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={data}
				columns={tagTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
