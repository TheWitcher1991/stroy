import { Clock, CopyCheck, FileText, Sliders, Tray } from '@gravity-ui/icons'
import { Button, DropdownMenu, Icon } from '@gravity-ui/uikit'
import { useMemo } from 'react'

import { documentsActions, useDocumentsStore } from '~widgets/documents'

import { DocumentStatus, DocumentStatusMapper } from '@stroy/models'

export function DocumentsCogs() {
	const { loading, filter } = useDocumentsStore()

	const items: DropdownItem = useMemo(
		() => [
			{
				iconStart: <Icon size={16} data={FileText} />,
				action: () => {
					documentsActions.setFilter({
						status: undefined,
					})
				},
				text: 'Все документы',
				selected: !filter.status,
			},
			{
				iconStart: <Icon size={16} data={CopyCheck} />,
				action: () => {
					documentsActions.setFilter({
						status: DocumentStatus.APPROVED,
					})
				},
				text: DocumentStatusMapper[DocumentStatus.APPROVED],
				selected: filter.status === DocumentStatus.APPROVED,
			},
			{
				iconStart: <Icon size={16} data={Clock} />,
				action: () => {
					documentsActions.setFilter({
						status: DocumentStatus.HARMONIZATION,
					})
				},
				text: DocumentStatusMapper[DocumentStatus.HARMONIZATION],
				selected: filter.status === DocumentStatus.HARMONIZATION,
			},
			{
				iconStart: <Icon size={16} data={Tray} />,
				action: () => {
					documentsActions.setFilter({
						status: DocumentStatus.DRAFT,
					})
				},
				text: DocumentStatusMapper[DocumentStatus.DRAFT],
				selected: filter.status === DocumentStatus.DRAFT,
			},
		],
		[filter.status],
	)

	return (
		<>
			<DropdownMenu
				renderSwitcher={props => (
					<Button
						{...props}
						view={'outlined'}
						size={'m'}
						disabled={loading}
					>
						Фильтр
						<Icon data={Sliders} size={16} />
					</Button>
				)}
				disabled={loading}
				size={'m'}
				items={items}
			/>
		</>
	)
}
