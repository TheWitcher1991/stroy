import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

const BaseDepartmentSchema = z.object({
	title: zShape.title,
})

export const DepartmentSchema = BaseDepartmentSchema.extend({
	id: zShape.id,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const DepartmentIndicatorSchema = z.object({
	documents: z.number(),
	tags: z.number(),
	projects: z.number(),
	guards: z.number(),
	users: z.number(),
	size: z.number(),
})
