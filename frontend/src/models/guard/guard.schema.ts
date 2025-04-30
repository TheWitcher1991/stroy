import { z } from 'zod'

import { zShape } from '~packages/schemas'

export const GuardOperation = {
	CREATE: 'CREATE',
	READ: 'READ',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
} as const

export type GuardOperation = EnumType<typeof GuardOperation>

const BaseGuardSchema = z.object({
	title: zShape.title,
	operations: z.nativeEnum(GuardOperation).array(),
})

export const GuardSchema = BaseGuardSchema.extend({
	id: zShape.id,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateGuardSchema = BaseGuardSchema

export const CreateGuardSchema = BaseGuardSchema
