import { memo, useMemo } from 'react'

import {
	UserCell,
	UserDeleteButton,
	UserEditButton,
	UserViewButton,
} from '~models/user'

import { IUser, useIamAdmin } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions, Indicator } from '~packages/ui'

const UseRowActions = memo((user: IUser) => {
	const iam = useIamAdmin()

	return (
		<Actions justifyContent={'end'}>
			{iam ? (
				<>
					<UserEditButton user={user} onlyIcon={true} />
					<UserDeleteButton user={user.id} onlyIcon={true} />
				</>
			) : (
				<UserViewButton user={user.id} onlyIcon={true} />
			)}
		</Actions>
	)
})

export default function useUserTableData(users: IUser[]) {
	return useMemo(
		() =>
			users.map(user => ({
				user: <UserCell user={user} />,
				documents: <Indicator count={user.documents.length} />,
				created: formatDateInRu(user.date_joined),
				actions: <UseRowActions user={user} />,
			})),
		[users],
	)
}
