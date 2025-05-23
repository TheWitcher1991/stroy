import { useUsersStore } from '~widgets/users/users.hooks'

import { ModelTable, TableSkeleton } from '~features/shared'
import { useUserTableData } from '~features/user'

import { userTableColumns } from '~models/user'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Users() {
	const { list, loading, error, count } = useUsersStore()

	const data = useUserTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
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
