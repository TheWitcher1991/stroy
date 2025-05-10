import { GripHorizontal, LayoutCellsLarge } from '@gravity-ui/icons'
import { Icon, SegmentedRadioGroup } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'

import { documentsActions, useDocumentsStore } from '~widgets/documents'

export default function DocumentsView() {
	const { filter, loading } = useDocumentsStore()

	const onUpdate = useMemoizedFn(value => {
		documentsActions.setFilter({
			view: value,
		})
	})

	return (
		<SegmentedRadioGroup
			name='view'
			defaultValue={filter.view}
			onUpdate={onUpdate}
			size={'m'}
			disabled={loading}
		>
			<SegmentedRadioGroup.Option value='table'>
				<Icon data={LayoutCellsLarge} size={16} />
			</SegmentedRadioGroup.Option>
			<SegmentedRadioGroup.Option value='list'>
				<Icon data={GripHorizontal} size={16} />
			</SegmentedRadioGroup.Option>
		</SegmentedRadioGroup>
	)
}
