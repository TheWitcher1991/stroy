import { IDocument, UseDocuments } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<IDocument, Partial<UseDocuments>>({
	count: 0,
	list: [],
	error: false,
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const documentsStore = creator.store
export const documentsState = documentsStore.state
export const documentsActions = creator.actions
