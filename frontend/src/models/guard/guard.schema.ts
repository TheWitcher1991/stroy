import { z } from 'zod'

import { GuardOperation } from '~models/guard/guard.utils'

import { zShape } from '~packages/schemas'

const BaseGuardSchema = z.object({
	title: zShape.title,
})

export const GuardSchema = BaseGuardSchema.extend({
	id: zShape.id,
	permissions: z.nativeEnum(GuardOperation).array(),
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateGuardSchema = BaseGuardSchema.extend({
	operations: z.nativeEnum(GuardOperation).array(),
})

export const CreateGuardSchema = BaseGuardSchema.extend({
	operations: z.nativeEnum(GuardOperation).array(),
})
