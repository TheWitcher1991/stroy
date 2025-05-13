import { Flex } from '@gravity-ui/uikit'

import UsersSearch from '~widgets/users/users-filter/users-search'

export default function UsersFilter() {
	return (
		<Flex alignItems={'center'} gap={3}>
			<UsersSearch />
		</Flex>
	)
}
