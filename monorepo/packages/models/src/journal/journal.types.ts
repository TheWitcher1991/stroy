import { z } from 'zod'

import { UseModelOptions } from '@stroy/types'

import { JournalSchema } from './journal.schema'

export type IJournal = z.infer<typeof JournalSchema>

export interface UseJournal extends UseModelOptions {
	document_id: number
}
