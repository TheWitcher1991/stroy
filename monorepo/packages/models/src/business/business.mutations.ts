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
