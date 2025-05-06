'use client'

import { User } from '@gravity-ui/uikit'
import { memo, useMemo } from 'react'

import { IUser, userFullName } from '@stroy/models'

interface UserCellProps {
	user: IUser
}

export const UserCell = memo(({ user }: UserCellProps) => {
	const name = useMemo(() => userFullName(user), [user])

	return (
		<User
			avatar={{ text: name, theme: 'brand' }}
			name={name}
			description={user.email}
			size='m'
		/>
	)
})
