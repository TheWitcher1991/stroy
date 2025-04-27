'use client'

import Projects, {
	ProjectsFetcher,
	ProjectsPagination,
} from '~widgets/projects'
import Users, { UsersFetcher, UsersPagination } from '~widgets/users'

import { Group, PageTitle } from '~packages/ui'

export default function UsersPage() {
	return (
		<Group>
			<PageTitle
				buttonTitle={'Добавить пользователя'}
				title={'Пользователи'}
				subtitle={'Все пользователи в этом рабочем пространстве'}
			/>
			<Users />
			<UsersFetcher />
			<UsersPagination />
		</Group>
	)
}
