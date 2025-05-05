import { ITag, UseTags } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<ITag, Partial<UseTags>>({
	count: 0,
	list: [],
	error: false,
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const tagsStore = creator.store
export const tagsState = tagsStore.state
export const tagsActions = creator.actions
