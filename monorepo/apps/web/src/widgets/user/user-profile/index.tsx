import { DefinitionList, DefinitionListItem } from '@gravity-ui/uikit'

import { PropsWithUser, userFullName, UserRoleMapper } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function UserProfile({ user }: PropsWithUser) {
	return (
		<DefinitionList>
			<DefinitionListItem name={'Идентификатор'}>
				ID—{user.id}
			</DefinitionListItem>
			<DefinitionListItem name={'Имя'}>
				{userFullName(user)}
			</DefinitionListItem>
			<DefinitionListItem name={'Email'}>{user.email}</DefinitionListItem>
			<DefinitionListItem name={'Роль'}>
				{UserRoleMapper[user.role]}
			</DefinitionListItem>
			<DefinitionListItem name={'Гуард'}>
				{user.guard?.title || 'Не задан'}
			</DefinitionListItem>
			<DefinitionListItem name={'Дата регистрации'}>
				{formatDateInRu(user.date_joined)}
			</DefinitionListItem>
		</DefinitionList>
	)
}
