import { z } from 'zod'

const BaseDocumentSchema = z.object({})

export const DocumentSchema = BaseDocumentSchema.extend({})

export const UpdateDocumentSchema = BaseDocumentSchema

export const CreateDocumentSchema = BaseDocumentSchema
