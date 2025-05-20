'use client'

import { useMount } from 'ahooks'

import { setBreadcrumbs } from '~widgets/nav'
import Users, {
	UsersFetcher,
	UsersFilter,
	UsersPagination,
} from '~widgets/users'

import { UserCreateButton } from '~models/user'

import { generateBreadcrumbs } from '@stroy/toolkit'

import { Group, PageTitle } from '~packages/ui'

export default function UsersPage() {
	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'users',
				variant: 'index',
			}),
		)
	})

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
