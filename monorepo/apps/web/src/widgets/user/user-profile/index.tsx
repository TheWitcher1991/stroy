import {
	Avatar,
	DefinitionList,
	DefinitionListItem,
	Flex,
} from '@gravity-ui/uikit'
import { useMemo } from 'react'

import { PropsWithUser, userFullName, UserRoleMapper } from '@stroy/models'
import { formatDateTimeInRu } from '@stroy/toolkit'

export default function UserProfile({ user }: PropsWithUser) {
	const userName = useMemo(() => userFullName(user), [user])

	return (
		<Flex justifyContent={'space-between'}>
			<DefinitionList>
				<DefinitionListItem
					name={'Идентификатор'}
					copyText={user.id.toString()}
				>
					ID—{user.id}
				</DefinitionListItem>
				<DefinitionListItem name={'Имя'}>{userName}</DefinitionListItem>
				<DefinitionListItem
					name={'Электронная почта'}
					copyText={user.email}
				>
					{user.email}
				</DefinitionListItem>
				<DefinitionListItem name={'Номер телефона'}>
					—
				</DefinitionListItem>
				<DefinitionListItem name={'Роль'}>
					{UserRoleMapper[user.role]}
				</DefinitionListItem>
				<DefinitionListItem name={'Гуард'}>
					{user.guard?.title || 'Не задан'}
				</DefinitionListItem>
				<DefinitionListItem name={'Дата создания'}>
					{formatDateTimeInRu(user.date_joined)}
				</DefinitionListItem>
				<DefinitionListItem name={'Дата последней аутентификации\n'}>
					{formatDateTimeInRu(user.last_login)}
				</DefinitionListItem>
			</DefinitionList>
			<Avatar
				theme={'brand'}
				size={'xl'}
				imgUrl={user.avatar}
				text={userName}
			/>
		</Flex>
	)
}
