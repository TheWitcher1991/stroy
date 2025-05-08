import { useStore } from '@tanstack/react-store'

import { documentHistoryStore } from '~widgets/document/document-history/index.store'

export const useDocumentHistoryStore = () => {
	return useStore(documentHistoryStore)
}
