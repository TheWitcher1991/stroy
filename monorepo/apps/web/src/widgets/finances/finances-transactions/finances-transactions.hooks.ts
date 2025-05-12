import { useStore } from '@tanstack/react-store'

import { paymentsStore } from '~widgets/finances/finances-transactions/finances-transactions.store'

export const usePaymentsStore = () => {
	return useStore(paymentsStore)
}
