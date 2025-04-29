import { z } from 'zod'

import {
	CreateProjectSchema,
	ProjectSchema,
	UpdateProjectSchema,
} from '~models/project/project.schema'

export type IProject = z.infer<typeof ProjectSchema>

export type IUpdateProject = z.infer<typeof UpdateProjectSchema>

export type ICreateProject = z.infer<typeof CreateProjectSchema>

export interface UseProjects extends UseModelOptions {}
