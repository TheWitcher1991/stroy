import { TableColumnConfig } from '@gravity-ui/uikit'

export const projectTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'project',
		name: 'Проект',
		width: '30%',
	},
	{
		id: 'documents',
		name: 'Документов',
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
