import { IUser, UseUsers } from '~models/user'

import { createModelListStore } from '~packages/reducers'

const creator = createModelListStore<IUser, Partial<UseUsers>>({
	count: 0,
	list: [],
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const usersStore = creator.store
export const usersState = usersStore.state
export const usersActions = creator.actions
