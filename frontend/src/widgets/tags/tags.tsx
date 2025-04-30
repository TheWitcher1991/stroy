import { tagsState } from '~widgets/tags/tags.store'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useTagTableData from '~features/use-tag-table-data'

import { tagTableColumns } from '~models/tag'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Tags() {
	const data = useTagTableData(tagsState.list)

	return (
		<RenderFetchData
			hasError={tagsState.error}
			isLoading={tagsState.loading}
			countData={tagsState.count}
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
