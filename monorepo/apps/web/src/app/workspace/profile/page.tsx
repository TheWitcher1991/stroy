'use client'

import { useMount } from 'ahooks'

import { setBreadcrumbs } from '~widgets/nav'
import Profile from '~widgets/profile'

import { generateSettingBreadcrumbs, IUser, useProfile } from '@stroy/models'

import { RenderFetchData } from '~packages/lib'
import { Group, PageTitle } from '~packages/ui'

export default function ProfilePage() {
	const { data, isLoading, isError } = useProfile()

	useMount(() => setBreadcrumbs(generateSettingBreadcrumbs('account')))

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
