import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { journalServiceKeys } from './journal.config'
import { JournalRepository } from './journal.repository'
import { UseJournal } from './journal.types'

export const useJournal = (params?: Partial<UseJournal>) => {
	return useQuery({
		queryKey: [journalServiceKeys.journal, params],
		queryFn: () => JournalRepository.all(params),
		placeholderData: keepPreviousData,
	})
}
