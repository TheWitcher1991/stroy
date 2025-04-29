import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { usersActions, usersState } from '~widgets/users'

import { PAGE_SIZE_OPTIONS } from '~packages/system'

export default function UsersPagination() {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'}>Всего {usersState.count}</Text>
			<Pagination
				page={usersState.filter.page}
				pageSize={usersState.filter.page_size}
				total={usersState.count}
				compact={true}
				showInput={true}
				showPages={true}
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				onUpdate={(page, pageSize) => {
					usersActions.setFilter({
						page,
						page_size: pageSize,
					})
				}}
			/>
		</Flex>
	)
}
