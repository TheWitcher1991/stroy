import { usersState } from '~widgets/users/users.store'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useUserTableData from '~features/use-user-table-data'

import { userTableColumns } from '~models/user'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Users() {
	const data = useUserTableData(usersState.list)

	return (
		<RenderFetchData
			isLoading={usersState.loading}
			countData={usersState.count}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={data}
				columns={userTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
