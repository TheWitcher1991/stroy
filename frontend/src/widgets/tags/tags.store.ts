import { ITag, UseTags } from '~models/tag'

import { createModelListStore } from '~packages/reducers'

const creator = createModelListStore<ITag, Partial<UseTags>>({
	count: 0,
	list: [],
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const tagsStore = creator.store
export const tagsState = tagsStore.state
export const tagsActions = creator.actions
