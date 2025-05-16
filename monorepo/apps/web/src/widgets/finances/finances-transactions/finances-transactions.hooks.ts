import { useUnit } from 'effector-react'

import { $store } from '~widgets/finances/finances-transactions/finances-transactions.store'

export const usePaymentsStore = () => useUnit($store)
