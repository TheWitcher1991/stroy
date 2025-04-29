import { z } from 'zod'

const BaseProjectSchema = z.object({})

export const ProjectSchema = BaseProjectSchema.extend({})

export const UpdateProjectSchema = BaseProjectSchema

export const CreateProjectSchema = BaseProjectSchema
