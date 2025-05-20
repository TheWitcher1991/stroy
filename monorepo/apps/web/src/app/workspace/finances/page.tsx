'use client'

import { useMount } from 'ahooks'

import FinancesManage from '~widgets/finances/finances-manage'
import { setBreadcrumbs } from '~widgets/nav'

import { generatePaymentBreakdown } from '@stroy/models'

export default function FinancesPage() {
	useMount(() => {
		setBreadcrumbs(generatePaymentBreakdown('manage'))
	})

	return <FinancesManage />
}
