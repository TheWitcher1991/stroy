import { useShallow } from 'zustand/react/shallow'

import { useAccountStore } from '~models/auth/auth.store'

export const useCheckAuth = () => {
	const token = useAccountStore(
		useShallow(state => state.account?.access_token),
	)

	return !!token
}
