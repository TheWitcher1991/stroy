import { IJournal, UseJournal } from '@stroy/models'
import { createModelListApi } from '@stroy/toolkit'

export const {
	setCount,
	setList,
	setFilter,
	setLoading,
	setError,
	reset,
	changeQueryFromInput,
	$store,
} = createModelListApi<IJournal, UseJournal>({
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
