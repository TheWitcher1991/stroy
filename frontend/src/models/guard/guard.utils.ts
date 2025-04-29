import { TableColumnConfig } from '@gravity-ui/uikit'

export const guardTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'guard',
		name: 'Гуард',
		width: '30%',
	},
	{
		id: 'operations',
		name: 'Операции',
		width: '30%',
	},
	{
		id: 'created',
		name: 'Создан',
		width: '20%',
	},
	{
		id: 'actions',
		align: 'right',
		name: 'Действия',
		width: '20%',
	},
]
