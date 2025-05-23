import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

export const zDepartmentId = zBrand(zShape.id, 'DepartmentID')

const BaseDepartmentSchema = z.object({
	title: zShape.title,
})

export const DepartmentSchema = BaseDepartmentSchema.extend({
	id: zDepartmentId,
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
