import { useUnit } from 'effector-react'

import { $store } from '~widgets/documents/documents.store'

export const useDocumentsStore = () => useUnit($store)
