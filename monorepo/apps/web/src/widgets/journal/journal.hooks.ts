import { useUnit } from 'effector-react'

import { $store } from '~widgets/journal/journal.store'

export const useJournalStore = () => useUnit($store)
