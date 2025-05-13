import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@stroy/toolkit'

import { businessServiceKeys } from './business.config'
import { BusinessRepository } from './business.repository'
import { IDeposit } from './business.types'

export const useDeposit = () => {
	return useMutation({
		mutationFn: (data: IDeposit) => BusinessRepository.deposit(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[businessServiceKeys.wallet]])
		},
	})
}

export const useSubscribe = () => {
	return useMutation({
		mutationFn: () => BusinessRepository.subscribe(),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[businessServiceKeys.subscription],
			])
		},
	})
}

export const useUnsubscribe = () => {
	return useMutation({
		mutationFn: () => BusinessRepository.unsubscribe(),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[businessServiceKeys.subscription],
				[businessServiceKeys.payments],
			])
		},
	})
}

export const useRenew = () => {
	return useMutation({
		mutationFn: () => BusinessRepository.renew(),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[businessServiceKeys.subscription],
			])
		},
	})
}
