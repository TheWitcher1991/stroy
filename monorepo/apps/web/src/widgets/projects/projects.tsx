import { useProjectsStore } from '~widgets/projects/projects.hooks'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useProjectTableData from '~features/use-project-table-data'

import { projectTableColumns } from '~models/project'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Projects() {
	const { list, loading, error, count } = useProjectsStore()

	const data = useProjectTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={data}
				columns={projectTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
