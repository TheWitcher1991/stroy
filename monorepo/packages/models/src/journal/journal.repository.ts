import { http } from '../request'

import { ReadonlyRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { journalServiceKeys } from './journal.config'
import { IJournal, UseJournal } from './journal.types'

export const JournalRepository = new ReadonlyRepository<
	ListResponse<IJournal>,
	IJournal,
	UseJournal
>(http.instance, journalServiceKeys.journal)
