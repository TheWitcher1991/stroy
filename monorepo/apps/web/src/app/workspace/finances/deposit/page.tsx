'use client'

import { useMount } from 'ahooks'

import FinancesDeposit from '~widgets/finances/finances-deposit'
import { setBreadcrumbs } from '~widgets/nav'

import { generatePaymentBreakdown } from '@stroy/models'

export default function DepositPage() {
	useMount(() => {
		setBreadcrumbs(generatePaymentBreakdown('deposit'))
	})

	return <FinancesDeposit />
}
