import { IGuard, UseGuards } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<IGuard, Partial<UseGuards>>({
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

export const guardsStore = creator.store
export const guardsActions = creator.actions
