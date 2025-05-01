import { TableColumnConfig } from '@gravity-ui/uikit'

export const tagTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'tag',
		name: 'Тег',
		width: '20%',
	},
	{
		id: 'summary',
		name: 'Сводка',
		width: '20%',
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
