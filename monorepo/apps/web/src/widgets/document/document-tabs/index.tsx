import { CircleInfo, ClockArrowRotateLeft, CodeFork } from '@gravity-ui/icons'
import { Icon, Tab, TabList } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useState } from 'react'

export type DocumentTab = '1' | '2' | '3'

interface DocumentTabsProps {
	index: DocumentTab
	setIndex: (index: DocumentTab) => void
}

export default function DocumentTabs({ index, setIndex }: DocumentTabsProps) {
	const [value, setValue] = useState<DocumentTab>(index)

	const handleChange = useMemoizedFn((value: DocumentTab) => {
		setValue(value)
		setIndex(value)
	})

	return (
		<TabList value={value} onUpdate={handleChange} size='l'>
			<Tab value='1' icon={<Icon data={CircleInfo} size={16} />}>
				Информация
			</Tab>
			<Tab
				value='2'
				icon={<Icon data={ClockArrowRotateLeft} size={16} />}
			>
				История
			</Tab>
			<Tab value='3' icon={<Icon data={CodeFork} size={16} />}>
				Версии
			</Tab>
		</TabList>
	)
}
