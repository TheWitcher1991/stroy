import { DocumentSchema } from '../document'
import { UserSchema } from '../user'
import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

import { JournalAction } from './journal.utils'

export const JournalSchema = z.object({
	id: zShape.id,
	document: DocumentSchema,
	action: z.nativeEnum(JournalAction),
	details: z.string(),
	user: UserSchema,
	created_at: zShape.datetime,
})
