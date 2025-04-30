import { z } from 'zod'

import { zShape } from '~packages/schemas'

const BaseTagSchema = z.object({
	title: zShape.title,
})

export const TagSchema = BaseTagSchema.extend({
	id: zShape.id,
})

export const UpdateTagSchema = BaseTagSchema

export const CreateTagSchema = BaseTagSchema
