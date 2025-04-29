import { z } from 'zod'

const BaseTagSchema = z.object({})

export const TagSchema = BaseTagSchema.extend({})

export const UpdateTagSchema = BaseTagSchema

export const CreateTagSchema = BaseTagSchema
