import { useQuery } from '@tanstack/react-query'

import { businessServiceKeys } from './business.config'
import { BusinessRepository } from './business.repository'

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

export const useSubscription = () => {
	const { isError, isLoading, data } = useQuery({
		queryKey: [businessServiceKeys.subscription],
		queryFn: () => BusinessRepository.subscription(),
	})

	return {
		isError,
		isLoading,
		subscription: data?.data,
	}
}
