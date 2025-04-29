import { z } from 'zod'

import { JournalSchema } from '~models/journal/journal.schema'

export type IJournal = z.infer<typeof JournalSchema>

export interface UseJournal extends UseModelOptions {}
