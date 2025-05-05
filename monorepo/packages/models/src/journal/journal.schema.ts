import { DocumentSchema } from '../document'
import { UserSchema } from '../user'
import { zShape } from '@stroy/toolkit'
import { z } from 'zod'

import { JournalAction } from './journal.utils'

export const JournalSchema = z.object({
	id: zShape.id,
	document: DocumentSchema,
	action: z.nativeEnum(JournalAction),
	user: UserSchema,
	created_at: zShape.datetime,
})
