import { z } from 'zod'

import { DocumentSchema } from '~models/document'
import { JournalAction } from '~models/journal/journal.utils'
import { UserSchema } from '~models/user'

import { zShape } from '~packages/schemas'

export const JournalSchema = z.object({
	id: zShape.id,
	document: DocumentSchema,
	action: z.nativeEnum(JournalAction),
	user: UserSchema,
	created_at: zShape.datetime,
})
