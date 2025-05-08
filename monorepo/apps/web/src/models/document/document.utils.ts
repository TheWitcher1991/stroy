import {
	FileLetterP,
	FileLetterW,
	FileText,
	MathOperations,
	MusicNote,
	Picture,
} from '@gravity-ui/icons'
import { TableColumnConfig } from '@gravity-ui/uikit'

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
