import { useUnit } from 'effector-react'

import { $store } from '~widgets/document/document-history/index.store'

export const useDocumentHistoryStore = () => useUnit($store)
