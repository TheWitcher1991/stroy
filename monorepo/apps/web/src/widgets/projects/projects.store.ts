import { IProject, UseProjects } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<IProject, Partial<UseProjects>>({
	count: 0,
	list: [],
	error: false,
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
		ordering: '-created_at',
	},
})

export const projectsStore = creator.store
export const projectsActions = creator.actions
