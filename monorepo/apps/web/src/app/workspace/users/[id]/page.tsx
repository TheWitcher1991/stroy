'use client'

import { use } from 'react'

import User from '~widgets/user'

import { useUser } from '@stroy/models'

import { RenderFetchData } from '~packages/lib'

export default function UserPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)
	const { isLoading, isError, data } = useUser(Number(id))

	return (
		<RenderFetchData isLoading={isLoading} hasError={isError}>
			<User user={data?.data} />
		</RenderFetchData>
	)
}
