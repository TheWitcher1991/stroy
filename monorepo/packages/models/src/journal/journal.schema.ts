import { DocumentSchema } from '../document'
import { UserSchema } from '../user'
import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

import { JournalAction } from './journal.utils'

export const zJournalId = zBrand(zShape.id, 'JournalID')

export const JournalSchema = z.object({
	id: zJournalId,
	document: DocumentSchema,
	action: z.nativeEnum(JournalAction),
	details: z.string(),
	user: UserSchema,
	created_at: zShape.datetime,
})
