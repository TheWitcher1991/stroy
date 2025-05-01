import { useMemo } from 'react'

import { IUser, UserCell } from '~models/user'

import { formatDateInRu } from '~packages/utils'

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
