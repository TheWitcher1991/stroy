import { useUnit } from 'effector-react'

import { $store } from '~widgets/users/users.store'

export const useUsersStore = () => useUnit($store)
