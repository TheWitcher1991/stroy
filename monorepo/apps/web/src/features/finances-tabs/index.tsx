import { CreditCard, FileText, Globe, Receipt } from '@gravity-ui/icons'
import { Icon, Tab, TabList } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import {
	FinancesTab,
	useFinancesTabStore,
} from '~features/finances-tabs/index.store'

import { href } from '@stroy/href'

const linkMapper: Record<FinancesTab, string> = {
	1: href.finances.deposit,
	2: href.finances.index,
	3: href.finances.closure,
	4: href.finances.transactions,
}

export default function FinancesTabs() {
	const router = useRouter()

	const index = useFinancesTabStore(state => state.index)
	const setIndex = useFinancesTabStore(state => state.setIndex)

	const handleChange = useCallback(
		(value: FinancesTab) => {
			setIndex(value)
			router.push(linkMapper[value])
		},
		[setIndex, router],
	)

	return (
		<TabList value={index} onUpdate={handleChange} size='l'>
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
