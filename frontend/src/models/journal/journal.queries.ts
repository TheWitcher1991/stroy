import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { journalServiceKeys } from '~models/journal/journal.config'
import { JournalRepository } from '~models/journal/journal.repository'
import { UseJournal } from '~models/journal/journal.types'

export const useJournal = (params?: Partial<UseJournal>) => {
	return useQuery({
		queryKey: [journalServiceKeys.journal, params],
		queryFn: () => JournalRepository.all(params),
		placeholderData: keepPreviousData,
	})
}
