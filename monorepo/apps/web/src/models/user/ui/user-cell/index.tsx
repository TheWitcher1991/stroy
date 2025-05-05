'use client'

import { User } from '@gravity-ui/uikit'
import { IUser, userFullName } from '@stroy/models'
import { memo, useMemo } from 'react'

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
