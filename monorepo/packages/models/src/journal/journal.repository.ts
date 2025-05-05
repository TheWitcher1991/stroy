import { http } from '../request'
import { ReadonlyRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { journalServiceKeys } from './journal.config'
import { IJournal, UseJournal } from './journal.types'

const JournalRepositoryBuilder = () => {
	return new ReadonlyRepository<ListResponse<IJournal>, IJournal, UseJournal>(
		http.instance,
		journalServiceKeys.journal,
	)
}

export const JournalRepository = JournalRepositoryBuilder()
