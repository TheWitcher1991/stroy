import { UseModelOptions } from '@stroy/types'
import { z } from 'zod'

import { JournalSchema } from './journal.schema'

export type IJournal = z.infer<typeof JournalSchema>

export interface UseJournal extends UseModelOptions {}
