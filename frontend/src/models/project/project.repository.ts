import { projectServiceKeys } from '~models/project/project.config'
import {
	ICreateProject,
	IProject,
	IUpdateProject,
	UseProjects,
} from '~models/project/project.types'

import { http } from '~packages/lib'
import { CrudRepository } from '~packages/repositories'

const ProjectRepositoryBuilder = () => {
	return new CrudRepository<
		ListResponse<IProject>,
		IProject,
		ICreateProject,
		IUpdateProject,
		UseProjects
	>(http.instance, projectServiceKeys.projects)
}

export const ProjectRepository = ProjectRepositoryBuilder()
