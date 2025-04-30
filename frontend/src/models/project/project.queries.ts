import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { projectServiceKeys } from '~models/project/project.config'
import { ProjectRepository } from '~models/project/project.repository'
import { UseProjects } from '~models/project/project.types'

export const useProjects = (params?: Partial<UseProjects>) => {
	return useQuery({
		queryKey: [projectServiceKeys.projects, params],
		queryFn: () => ProjectRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useProject = (id: number) => {
	return useQuery({
		queryKey: [projectServiceKeys.project, id],
		queryFn: () => ProjectRepository.getById(id),
		enabled: !!id,
	})
}
