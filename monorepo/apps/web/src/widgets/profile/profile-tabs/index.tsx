import { SegmentedRadioGroup } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useState } from 'react'

import { setBreadcrumbs } from '~widgets/nav'

import { generateSettingBreadcrumbs, SettingResourceType } from '@stroy/models'

export type ProfileTab = '1' | '2' | '3'

interface ProfileTabsProps {
	index: ProfileTab
	setIndex: (index: ProfileTab) => void
}

const breadcrumbsMapper: Record<ProfileTab, SettingResourceType> = {
	'1': 'account',
	'2': 'department',
	'3': 'api-key',
}

export default function ProfileTabs({ index, setIndex }: ProfileTabsProps) {
	const [value, setValue] = useState<ProfileTab>(index)

	const handleChange = useMemoizedFn((value: ProfileTab) => {
		setValue(value)
		setIndex(value)
		setBreadcrumbs(generateSettingBreadcrumbs(breadcrumbsMapper[value]))
	})

	return (
		<SegmentedRadioGroup
			name='profile'
			defaultValue={value}
			onUpdate={handleChange}
			size={'m'}
		>
			<SegmentedRadioGroup.Option value={'1'}>
				Учетная запись
			</SegmentedRadioGroup.Option>
			<SegmentedRadioGroup.Option value={'2'}>
				Отдел
			</SegmentedRadioGroup.Option>
			<SegmentedRadioGroup.Option value={'3'} disabled={true}>
				API-ключи
			</SegmentedRadioGroup.Option>
		</SegmentedRadioGroup>
	)
}
