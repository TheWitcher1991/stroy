import { Tab, TabList } from '@gravity-ui/uikit'
import { useCallback, useState } from 'react'

export type DocumentTab = '1' | '2' | '3'

interface DocumentTabsProps {
	index: DocumentTab
	setIndex: (index: DocumentTab) => void
}

export default function DocumentTabs({ index, setIndex }: DocumentTabsProps) {
	const [value, setValue] = useState<DocumentTab>(index)

	const handleChange = useCallback(
		(value: DocumentTab) => {
			setValue(value)
			if (setIndex) {
				setIndex(value)
			}
		},
		[setIndex],
	)

	return (
		<TabList value={value} onUpdate={handleChange} size='l'>
			<Tab value='1'>Информация</Tab>
			<Tab value='2'>История</Tab>
			<Tab value='3'>Версии</Tab>
		</TabList>
	)
}
