import { http } from '../request'

import { CrudRepository } from '@stroy/toolkit'
import { ListResponse } from '@stroy/types'

import { projectServiceKeys } from './project.config'
import {
	ICreateProject,
	IProject,
	IUpdateProject,
	UseProjects,
} from './project.types'

export const ProjectRepository = new CrudRepository<
	ListResponse<IProject>,
	IProject,
	ICreateProject,
	IUpdateProject,
	UseProjects
>(http.instance, projectServiceKeys.projects)
