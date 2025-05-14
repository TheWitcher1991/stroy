import {
	FileLetterP,
	FileLetterW,
	FileText,
	MathOperations,
	MusicNote,
	Picture,
} from '@gravity-ui/icons'
import { TableColumnConfig } from '@gravity-ui/uikit'
import {
	IconFileSpreadsheet,
	IconFileText,
	IconFileTypePdf,
	IconFileTypeTxt,
	IconFileWord,
	IconMovie,
	IconMusic,
	IconPhoto,
} from '@tabler/icons-react'

import { DocumentType } from '@stroy/models'

export const documentIcon = {
	[DocumentType.image]: Picture,
	[DocumentType.pdf]: FileLetterP,
	[DocumentType.word]: FileLetterW,
	[DocumentType.excel]: MathOperations,
	[DocumentType.video]: MusicNote,
	[DocumentType.audio]: MusicNote,
	[DocumentType.text]: FileText,
	[DocumentType.other]: FileText,
	[DocumentType.unknown]: FileText,
}

export const documentIconComponent = {
	[DocumentType.image]: <IconPhoto size={19} />,
	[DocumentType.pdf]: <IconFileTypePdf size={19} />,
	[DocumentType.word]: <IconFileWord size={19} />,
	[DocumentType.excel]: <IconFileSpreadsheet size={19} />,
	[DocumentType.video]: <IconMovie size={19} />,
	[DocumentType.audio]: <IconMusic size={19} />,
	[DocumentType.text]: <IconFileTypeTxt size={19} />,
	[DocumentType.other]: <IconFileText size={19} />,
	[DocumentType.unknown]: <IconFileText size={19} />,
}

export const DocumentIcon = ({
	type,
	size = 19,
}: {
	type: string
	size?: number
}) => {
	switch (type) {
		case DocumentType.image:
			return <IconPhoto size={size} color={'var(--g-color-base-brand)'} />
		case DocumentType.pdf:
			return (
				<IconFileTypePdf
					size={size}
					color={'var(--g-color-base-brand)'}
				/>
			)
		case DocumentType.word:
			return (
				<IconFileWord size={size} color={'var(--g-color-base-brand)'} />
			)
		case DocumentType.excel:
			return (
				<IconFileSpreadsheet
					size={size}
					color={'var(--g-color-base-brand)'}
				/>
			)
		case DocumentType.video:
			return <IconMovie size={size} color={'var(--g-color-base-brand)'} />
		case DocumentType.audio:
			return <IconMusic size={size} color={'var(--g-color-base-brand)'} />
		case DocumentType.text:
			return (
				<IconFileTypeTxt
					size={size}
					color={'var(--g-color-base-brand)'}
				/>
			)
		case DocumentType.other:
			return (
				<IconFileText size={size} color={'var(--g-color-base-brand)'} />
			)
		case DocumentType.unknown:
			return (
				<IconFileText size={size} color={'var(--g-color-base-brand)'} />
			)
		default:
			return (
				<IconFileText size={size} color={'var(--g-color-base-brand)'} />
			)
	}
}

export const documentTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'filename',
		name: 'Документ',
		width: '20%',
	},
	{
		id: 'author',
		name: 'Автор',
		width: '20%',
	},
	{
		id: 'tag',
		name: 'Тэг',
		width: '10%',
	},
	{
		id: 'project',
		name: 'Проект',
		width: '15%',
	},
	{
		id: 'created',
		name: 'Создан',
		width: '10%',
	},
	{
		id: 'actions',
		align: 'right',
		name: 'Действия',
		width: '10%',
	},
]

export const documentVersionTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'filename',
		name: 'Документ',
		width: '20%',
	},
	{
		id: 'modified_by',
		name: 'Автор',
		width: '20%',
	},
	{
		id: 'created',
		name: 'Дата',
		width: '10%',
	},
	{
		id: 'actions',
		align: 'right',
		name: 'Действия',
		width: '10%',
	},
]
