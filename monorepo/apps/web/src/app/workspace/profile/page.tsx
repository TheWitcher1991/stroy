'use client'

import Profile from '~widgets/profile'

import { IUser, useProfile } from '@stroy/models'

import { RenderFetchData } from '~packages/lib'
import { Group, PageTitle } from '~packages/ui'

export default function ProfilePage() {
	const { data, isLoading, isError } = useProfile()

	return (
		<Group>
			<PageTitle
				title={'Настройки пользователя'}
				subtitle={'Управляйте настройками своей учетной записи здесь'}
			/>
			<RenderFetchData isLoading={isLoading} hasError={isError}>
				<Profile user={data?.data as IUser} />
			</RenderFetchData>
		</Group>
	)
}
