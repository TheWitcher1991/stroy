import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { businessServiceKeys } from './business.config'
import { BusinessRepository } from './business.repository'
import { UsePayments } from './business.types'

export const usePayments = (params?: Partial<UsePayments>) => {
	return useQuery({
		queryKey: [businessServiceKeys.payments, params],
		queryFn: () => BusinessRepository.payments(params),
		placeholderData: keepPreviousData,
	})
}

export const usePayment = (id: number) => {
	return useQuery({
		queryKey: [businessServiceKeys.payment, id],
		queryFn: () => BusinessRepository.payment(id),
		enabled: !!id,
	})
}

export const useWallet = () => {
	const { isError, isLoading, data } = useQuery({
		queryKey: [businessServiceKeys.wallet],
		queryFn: () => BusinessRepository.wallet(),
	})

	return {
		isError,
		isLoading,
		id: data?.data?.id,
		balance: data?.data?.balance,
	}
}

export const useSubscription = (enabled?: boolean) => {
	const { isError, isLoading, data } = useQuery({
		queryKey: [businessServiceKeys.subscription],
		queryFn: () => BusinessRepository.subscription(),
		enabled: !!enabled,
	})

	return {
		isError,
		isLoading,
		subscription: data?.data,
	}
}
