import { IPayment, UsePayments } from '@stroy/models'
import { createModelListStore } from '@stroy/toolkit'

const creator = createModelListStore<IPayment, Partial<UsePayments>>({
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

export const paymentsStore = creator.store
export const paymentsActions = creator.actions
