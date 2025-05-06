import { z } from 'zod'

import { UseModelOptions } from '@stroy/types'

import {
	CreateProjectSchema,
	ProjectSchema,
	UpdateProjectSchema,
} from './project.schema'

export type IProject = z.infer<typeof ProjectSchema>

export type IUpdateProject = z.infer<typeof UpdateProjectSchema>

export type ICreateProject = z.infer<typeof CreateProjectSchema>

export interface UseProjects extends UseModelOptions {}

export interface PropsWithProject {
	project: IProject
}

export interface PropsWithProjectId {
	project: number
}
