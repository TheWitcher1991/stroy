'use client'

import Users, {
	UsersFetcher,
	UsersFilter,
	UsersPagination,
} from '~widgets/users'

import { UserCreateButton } from '~models/user'

import { Group, PageTitle } from '~packages/ui'

export default function UsersPage() {
	return (
		<Group>
			<PageTitle
				title={'Пользователи'}
				subtitle={'Все пользователи в этом рабочем пространстве'}
				action={<UserCreateButton />}
			/>
			<UsersFilter />
			<Users />
			<UsersFetcher />
			<UsersPagination />
		</Group>
	)
}
