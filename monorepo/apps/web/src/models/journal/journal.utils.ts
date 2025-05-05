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
		width: '30%',
	},
	{
		id: 'created',
		name: 'Документ',
		width: '20%',
	},
	{
		id: 'actions',
		align: 'right',
		name: 'Действия',
		width: '20%',
	},
]
