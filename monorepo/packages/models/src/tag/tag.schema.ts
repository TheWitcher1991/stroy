import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

export const zTagId = zBrand(zShape.id, 'TagID')

const BaseTagSchema = z.object({
	title: zShape.title,
	summary: z.string(),
	color: zShape.color,
})

export const TagSchema = BaseTagSchema.extend({
	id: zTagId,
	documents: zShape.indicator,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateTagSchema = BaseTagSchema

export const CreateTagSchema = BaseTagSchema
