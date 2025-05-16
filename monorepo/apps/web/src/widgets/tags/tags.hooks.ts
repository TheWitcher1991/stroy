import { useUnit } from 'effector-react'

import { $store } from '~widgets/tags/tags.store'

export const useTagsStore = () => useUnit($store)
