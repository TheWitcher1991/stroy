import { CreditCard, FileText, Globe, Receipt } from '@gravity-ui/icons'
import { Icon, Tab, TabList } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useUnit } from 'effector-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import {
	FinancesTab,
	financeTab,
} from '~features/business/finances-tabs/index.store'

import { href } from '@stroy/href'

const linkMapper: Record<FinancesTab, string> = {
	1: href.finances.deposit,
	2: href.finances.index,
	3: href.finances.closure,
	4: href.finances.transactions,
}

const TABS: FinancesTab[] = ['1', '2', '3', '4']

const DEFAULT_TAB: FinancesTab = '1'

export default function FinancesTabs() {
	const router = useRouter()
	const searchParams = useSearchParams()

	const $tab = useUnit(financeTab.$tab)

	const handleChange = useMemoizedFn((value: FinancesTab) => {
		financeTab.setTab(value)

		const newParams = new URLSearchParams()
		newParams.set('tab', value)
		financeTab.setTab(value)

		router.push(`${linkMapper[value]}?${newParams.toString()}`)
	})

	useEffect(() => {
		const tabFromQuery = searchParams.get('tab') as FinancesTab | null

		if (tabFromQuery && TABS.includes(tabFromQuery)) {
			financeTab.setTab(tabFromQuery)
		} else {
			financeTab.setTab(DEFAULT_TAB)
		}
	}, [searchParams])

	return (
		<TabList value={$tab} onUpdate={handleChange} size='l'>
			<Tab value='1' icon={<Icon data={CreditCard} size={16} />}>
				Пополнение
			</Tab>
			<Tab value='2' icon={<Icon data={Globe} size={16} />}>
				Управление
			</Tab>
			<Tab value='4' icon={<Icon data={Receipt} size={16} />}>
				Транзакции
			</Tab>
			<Tab
				value='3'
				disabled={true}
				icon={<Icon data={FileText} size={16} />}
			>
				Документы
			</Tab>
		</TabList>
	)
}
