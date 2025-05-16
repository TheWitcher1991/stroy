import { useUnit } from 'effector-react'

import { $store } from '~widgets/guards/guards.store'

export const useGuardsStore = () => useUnit($store)
