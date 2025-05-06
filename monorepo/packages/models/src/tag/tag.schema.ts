import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

const BaseTagSchema = z.object({
	title: zShape.title,
	summary: z.string(),
	color: zShape.color,
})

export const TagSchema = BaseTagSchema.extend({
	id: zShape.id,
	documents: zShape.indicator,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateTagSchema = BaseTagSchema

export const CreateTagSchema = BaseTagSchema
