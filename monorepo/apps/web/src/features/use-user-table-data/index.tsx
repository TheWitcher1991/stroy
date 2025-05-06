import { useMemo } from 'react'

import { UserCell, UserDeleteButton, UserEditButton } from '~models/user'

import { IUser } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions, Indicator } from '~packages/ui'

export default function useUserTableData(users: IUser[]) {
	return useMemo(
		() =>
			users.map(user => ({
				user: <UserCell user={user} />,
				documents: <Indicator count={user.documents.length} />,
				created: formatDateInRu(user.date_joined),
				actions: (
					<Actions justifyContent={'end'}>
						<UserEditButton user={user} onlyIcon={true} />
						<UserDeleteButton user={user.id} onlyIcon={true} />
					</Actions>
				),
			})),
		[users],
	)
}
