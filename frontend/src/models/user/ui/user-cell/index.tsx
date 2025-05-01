'use client'

import { User } from '@gravity-ui/uikit'
import { memo, useMemo } from 'react'

import { IUser, userFullName } from '~models/user'

interface UserCellProps {
	user: IUser
}

export const UserCell = memo(({ user }: UserCellProps) => {
	const name = useMemo(() => userFullName(user), [user])

	return (
		<User
			avatar={{ text: name, theme: 'brand' }}
			name={name}
			description='charles@mail.ai'
			size='m'
		/>
	)
})
