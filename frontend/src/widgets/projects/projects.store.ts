import { IProject, UseProjects } from '~models/project'

import { createModelListStore } from '~packages/reducers'

const creator = createModelListStore<IProject, Partial<UseProjects>>({
	count: 0,
	list: [],
	error: false,
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const projectsStore = creator.store
export const projectsState = projectsStore.state
export const projectsActions = creator.actions
