import { z } from 'zod'

import { GuardOperation } from '~models/guard/guard.utils'

import { zShape } from '~packages/schemas'

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
