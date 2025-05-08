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
		ordering: '-created_at',
	},
})

export const journalStore = creator.store
export const journalActions = creator.actions
