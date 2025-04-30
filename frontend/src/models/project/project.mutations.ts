import { useMutation } from '@tanstack/react-query/src'

import { projectServiceKeys } from '~models/project/project.config'
import { ProjectRepository } from '~models/project/project.repository'
import { ICreateProject, IUpdateProject } from '~models/project/project.types'

import { optimisticInvalidateQueries } from '~packages/lib'

export const useCreateProject = () => {
	return useMutation({
		mutationFn: (data: ICreateProject) => ProjectRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[projectServiceKeys.projects]])
		},
	})
}

export const useUpdateProject = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateProject>) =>
			ProjectRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[projectServiceKeys.projects],
				[projectServiceKeys.project, id],
			])
		},
	})
}

export const useDeleteProject = () => {
	return useMutation({
		mutationFn: (id: number) => ProjectRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[projectServiceKeys.projects]])
		},
	})
}
