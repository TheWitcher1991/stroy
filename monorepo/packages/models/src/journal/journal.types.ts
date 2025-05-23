import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import { JournalSchema } from './journal.schema'

export type JournalID = Branded<number, 'JournalID'>

export type IJournal = z.infer<typeof JournalSchema>

export interface UseJournal extends UseModelOptions {
	document_id: number
}
