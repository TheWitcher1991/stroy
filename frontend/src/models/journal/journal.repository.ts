import { journalServiceKeys } from '~models/journal/journal.config'
import { IJournal, UseJournal } from '~models/journal/journal.types'

import { http } from '~packages/lib'
import { ReadonlyRepository } from '~packages/repositories'

const JournalRepositoryBuilder = () => {
	return new ReadonlyRepository<ListResponse<IJournal>, IJournal, UseJournal>(
		http.instance,
		journalServiceKeys.journal,
	)
}

export const JournalRepository = JournalRepositoryBuilder()
