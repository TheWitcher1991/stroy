import { TableColumnConfig } from '@gravity-ui/uikit'

export const journalTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'user',
		name: 'Пользователь',
		width: '30%',
	},
	{
		id: 'action',
		name: 'Действие',
		width: '20%',
	},
	{
		id: 'document',
		name: 'Документ',
		width: '30%',
	},
	{
		id: 'created',
		align: 'right',
		name: 'Дата',
		width: '20%',
	},
]
