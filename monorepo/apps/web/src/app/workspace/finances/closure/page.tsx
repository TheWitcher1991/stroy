'use client'

import { useMount } from 'ahooks'

import FinancesClosure from '~widgets/finances/finances-closure'
import { setBreadcrumbs } from '~widgets/nav'

import { generatePaymentBreakdown } from '@stroy/models'

export default function ClosurePage() {
	useMount(() => {
		setBreadcrumbs(generatePaymentBreakdown('closure'))
	})

	return <FinancesClosure />
}
