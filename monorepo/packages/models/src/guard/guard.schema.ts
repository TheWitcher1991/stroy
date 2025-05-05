import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

import { GuardOperation } from './guard.utils'

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
	operations: z.nativeEnum(GuardOperation).array().min(1, {
		message: 'Гард должен иметь хотя бы одну операцию',
	}),
})

export const CreateGuardSchema = BaseGuardSchema.extend({
	operations: z.nativeEnum(GuardOperation).array().min(1, {
		message: 'Гард должен иметь хотя бы одну операцию',
	}),
})
