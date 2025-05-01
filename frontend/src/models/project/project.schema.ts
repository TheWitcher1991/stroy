import { z } from 'zod'

import { ProjectStatus } from '~models/project/project.utils'

import { zShape } from '~packages/schemas'

const BaseProjectSchema = z.object({
	title: zShape.title,
	code: z.string().max(64),
	tag: z.string().max(64),
	status: z.nativeEnum(ProjectStatus),
	start_date: zShape.datetime,
	end_date: zShape.datetime,
})

export const ProjectSchema = BaseProjectSchema.extend({
	id: zShape.id,
	documents: zShape.indicator,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateProjectSchema = BaseProjectSchema

export const CreateProjectSchema = BaseProjectSchema
