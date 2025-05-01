import { z } from 'zod'

import { zShape } from '~packages/schemas'

const BaseTagSchema = z.object({
	title: zShape.title,
	summary: zShape.description,
})

export const TagSchema = BaseTagSchema.extend({
	id: zShape.id,
	documents: zShape.indicator,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateTagSchema = BaseTagSchema

export const CreateTagSchema = BaseTagSchema
