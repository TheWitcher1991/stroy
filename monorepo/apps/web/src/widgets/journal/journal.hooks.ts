import { useStore } from '@tanstack/react-store'

import { journalStore } from '~widgets/journal/journal.store'

export const useJournalStore = () => {
	return useStore(journalStore)
}
