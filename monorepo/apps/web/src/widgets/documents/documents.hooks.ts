import { useStore } from '@tanstack/react-store'

import { documentsStore } from '~widgets/documents/documents.store'

export const useDocumentsStore = () => {
	return useStore(documentsStore)
}
