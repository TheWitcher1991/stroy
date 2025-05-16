import { FileText, Person, Shield } from '@gravity-ui/icons'
import { Icon, Tab, TabList } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useState } from 'react'

export type UserTab = '1' | '2' | '3'

interface UserTabsProps {
	index: UserTab
	setIndex: (index: UserTab) => void
	counter: number
}

export default function UserTabs({ index, setIndex, counter }: UserTabsProps) {
	const [value, setValue] = useState<UserTab>(index)

	const handleChange = useMemoizedFn((value: UserTab) => {
		setValue(value)
		setIndex(value)
	})

	return (
		<TabList value={value} onUpdate={handleChange} size='l'>
			<Tab value='1' icon={<Icon data={Person} size={16} />}>
				Профиль
			</Tab>
			<Tab
				value='2'
				icon={<Icon data={FileText} size={16} />}
				counter={counter}
			>
				Документы
			</Tab>
			<Tab
				value='3'
				icon={<Icon data={Shield} size={16} />}
				disabled={true}
			>
				Права доступа
			</Tab>
		</TabList>
	)
}
