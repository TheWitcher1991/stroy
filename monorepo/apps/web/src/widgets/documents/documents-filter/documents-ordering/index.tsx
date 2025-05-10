import {
	ArrowRotateRight,
	BarsDescendingAlignLeftArrowDown,
	Calendar,
} from '@gravity-ui/icons'
import { Button, DropdownMenu, Icon } from '@gravity-ui/uikit'
import { useMemo } from 'react'

import { documentsActions, useDocumentsStore } from '~widgets/documents'

export default function DocumentsOrdering() {
	const { loading, filter } = useDocumentsStore()

	const items: DropdownItem = useMemo(
		() => [
			{
				iconStart: <Icon size={16} data={Calendar} />,
				action: () =>
					documentsActions.setFilter({
						ordering: '-created_at',
					}),
				text: 'По дате создания',
				selected: filter.ordering === '-created_at',
			},
			{
				iconStart: <Icon size={16} data={ArrowRotateRight} />,
				action: () =>
					documentsActions.setFilter({
						ordering: '-updated_at',
					}),
				text: 'По дате обновления',
				selected: filter.ordering === '-updated_at',
			},
		],
		[filter.ordering],
	)

	return (
		<DropdownMenu
			renderSwitcher={props => (
				<Button
					{...props}
					view={'outlined'}
					size={'m'}
					disabled={loading}
				>
					Сортировка
					<Icon data={BarsDescendingAlignLeftArrowDown} size={16} />
				</Button>
			)}
			disabled={loading}
			size={'m'}
			items={items}
		/>
	)
}
