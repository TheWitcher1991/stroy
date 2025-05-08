import { SegmentedRadioGroup } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useState } from 'react'

export type ProfileTab = '1' | '2' | '3'

interface ProfileTabsProps {
	index: ProfileTab
	setIndex: (index: ProfileTab) => void
}

export default function ProfileTabs({ index, setIndex }: ProfileTabsProps) {
	const [value, setValue] = useState<ProfileTab>(index)

	const handleChange = useMemoizedFn((value: ProfileTab) => {
		setValue(value)
		setIndex(value)
	})

	return (
		<SegmentedRadioGroup
			name='profile'
			defaultValue={value}
			onUpdate={handleChange}
			size={'m'}
		>
			<SegmentedRadioGroup.Option value={'1'}>
				Аккаунт
			</SegmentedRadioGroup.Option>
			<SegmentedRadioGroup.Option value={'2'}>
				Департамент
			</SegmentedRadioGroup.Option>
			<SegmentedRadioGroup.Option value={'3'} disabled={true}>
				API-ключи
			</SegmentedRadioGroup.Option>
		</SegmentedRadioGroup>
	)
}
