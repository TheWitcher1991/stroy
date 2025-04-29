import { useMemo } from 'react'

import { IUser } from '~models/user'

export default function useUserTableData(users: IUser[]) {
	return useMemo(() => users.map(user => ({})), [users])
}
