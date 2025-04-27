import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'

import { projectTableColumns } from '~models/project'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Projects() {
	return (
		<RenderFetchData
			isLoading={false}
			countData={1}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={[]}
				columns={projectTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
