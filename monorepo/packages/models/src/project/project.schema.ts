import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

import { ProjectStatus } from './project.utils'

export const zProjectId = zBrand(zShape.id, 'ProjectID')

const BaseProjectSchema = z.object({
	title: zShape.title,
	code: zShape.name,
	tag: zShape.name,
	status: z.nativeEnum(ProjectStatus),
	start_date: z.string(),
	end_date: z.string(),
})

export const ProjectSchema = BaseProjectSchema.extend({
	id: zProjectId,
	documents: zShape.indicator,
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})

export const UpdateProjectSchema = BaseProjectSchema

export const CreateProjectSchema = BaseProjectSchema
