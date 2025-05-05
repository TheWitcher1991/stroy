import { useStore } from '@tanstack/react-store'

import { usersStore } from '~widgets/users/users.store'

export const useUsersStore = () => {
	return useStore(usersStore)
}
