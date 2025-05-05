import { useTagsStore } from '~widgets/tags/tags.hooks'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useTagTableData from '~features/use-tag-table-data'

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
