import { IUser, UseUsers } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<IUser, Partial<UseUsers>>({
	count: 0,
	list: [],
	error: false,
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const usersStore = creator.store
export const usersActions = creator.actions
