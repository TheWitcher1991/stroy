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
	},
})

export const guardsStore = creator.store
export const guardsState = guardsStore.state
export const guardsActions = creator.actions
