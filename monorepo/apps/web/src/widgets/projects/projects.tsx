import { projectsState } from '~widgets/projects/projects.store'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useProjectTableData from '~features/use-project-table-data'

import { projectTableColumns } from '~models/project'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Projects() {
	const data = useProjectTableData(projectsState.list)

	return (
		<RenderFetchData
			hasError={projectsState.error}
			isLoading={projectsState.loading}
			countData={projectsState.count}
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
