'use client'

import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

import { href } from '@stroy/href'
import { IUser, useInitial, userFullName } from '@stroy/models'

import { Cell } from '~packages/ui'

interface UserCellProps {
	user: IUser
}

export const UserCell = memo(({ user }: UserCellProps) => {
	const router = useRouter()

	const onClick = useCallback(
		() => router.replace(href.users.byId(user.id)),
		[user.id, router],
	)

	return (
		<Cell
			onClick={onClick}
			iconText={useInitial(user)}
			title={userFullName(user)}
			subtitle={user.email}
		/>
	)
})
