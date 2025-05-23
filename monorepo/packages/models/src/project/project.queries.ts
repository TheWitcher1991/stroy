import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { SelectOption } from '@stroy/types'

import { projectServiceKeys } from './project.config'
import { ProjectRepository } from './project.repository'
import { ProjectID, UseProjects } from './project.types'

export const useProjects = (params?: Partial<UseProjects>) => {
	return useQuery({
		queryKey: [projectServiceKeys.projects, params],
		queryFn: () => ProjectRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useProject = (id: ProjectID) => {
	return useQuery({
		queryKey: [projectServiceKeys.project, id],
		queryFn: () => ProjectRepository.getById(id),
		enabled: !!id,
	})
}

export const useSelectableProjects = (params?: Partial<UseProjects>) => {
	const [projects, setProjects] = useState<SelectOption[]>([])
	const { isLoading, data } = useProjects(params)

	useEffect(() => {
		if (!isLoading && data?.data) {
			setProjects(
				data.data.results.map(project => ({
					value: project.id.toString(),
					content: project.title,
				})),
			)
		}
	}, [isLoading, data])

	return {
		projects,
		isLoading,
	}
}
