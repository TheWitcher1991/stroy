import { useMemo } from 'react'

import { UserCell } from '~models/user'

import { IUser } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function useUserTableData(users: IUser[]) {
	return useMemo(
		() =>
			users.map(user => ({
				user: <UserCell user={user} />,
				documents: user.documents.length,
				created: formatDateInRu(user.date_joined),
				actions: <></>,
			})),
		[users],
	)
}
