import { z } from 'zod'

import { DocumentSchema } from '~models/document'
import { UserSchema } from '~models/user'

import { zShape } from '~packages/schemas'

export const JournalAction = {
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	RESTORE: 'RESTORE',
	APPROVE: 'APPROVE',
} as const

export type JournalAction = EnumType<typeof JournalAction>

export const JournalSchema = z.object({
	id: zShape.id,
	document: DocumentSchema,
	action: z.nativeEnum(JournalAction),
	user: UserSchema,
	created_at: zShape.datetime,
})
