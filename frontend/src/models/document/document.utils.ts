import { TableColumnConfig } from '@gravity-ui/uikit'

export const documentTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'filename',
		name: 'Название',
		width: '20%',
	},
	{
		id: 'project',
		name: 'Проект',
		width: '20%',
	},
	{
		id: 'tag',
		name: 'Тэг',
		width: '20%',
	},
	{
		id: 'user',
		name: 'Автор',
		width: '15%',
	},
	{
		id: 'created',
		name: 'Создан',
		width: '15%',
	},
	{
		id: 'actions',
		align: 'right',
		name: 'Действия',
		width: '15%',
	},
]
