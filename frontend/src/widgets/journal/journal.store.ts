import { IJournal, UseJournal } from '~models/journal'

import { createModelListStore } from '~packages/reducers'

const creator = createModelListStore<IJournal, Partial<UseJournal>>({
	count: 0,
	list: [],
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const journalStore = creator.store
export const journalState = journalStore.state
export const journalActions = creator.actions
