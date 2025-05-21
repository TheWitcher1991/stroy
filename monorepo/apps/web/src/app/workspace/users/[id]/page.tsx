'use client'

import { useMount } from 'ahooks'
import { use } from 'react'

import { setBreadcrumbs } from '~widgets/nav'
import User from '~widgets/user'

import { IUser, useUser } from '@stroy/models'
import { generateBreadcrumbs } from '@stroy/toolkit'

import { RenderFetchData } from '~packages/lib'

import UserLoading from './loading'

export default function UserPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)
	const { isLoading, isError, data } = useUser(Number(id))

	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'users',
				variant: 'view',
			}),
		)
	})

	return (
		<RenderFetchData
			isLoading={isLoading}
			hasError={isError}
			loadingFallback={<UserLoading />}
		>
			<User user={data?.data as IUser} />
		</RenderFetchData>
	)
}
