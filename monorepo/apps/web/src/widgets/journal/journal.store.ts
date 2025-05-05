import { IJournal, UseJournal } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<IJournal, Partial<UseJournal>>({
	count: 0,
	list: [],
	error: false,
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const journalStore = creator.store
export const journalState = journalStore.state
export const journalActions = creator.actions
