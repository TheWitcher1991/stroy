import { TableColumnConfig } from '@gravity-ui/uikit'

export const userTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'user',
		name: 'Пользователь',
		width: '40%',
	},
	{
		id: 'documents',
		name: 'Документов',
		width: '20%',
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
