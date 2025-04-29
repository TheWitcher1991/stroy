import { IDocument, UseDocuments } from '~models/document'

import { createModelListStore } from '~packages/reducers'

const creator = createModelListStore<IDocument, Partial<UseDocuments>>({
	count: 0,
	list: [],
	loading: true,
	filter: {
		page_size: 30,
		page: 1,
	},
})

export const documentsStore = creator.store
export const documentsState = documentsStore.state
export const documentsActions = creator.actions
