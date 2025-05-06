import { TableColumnConfig } from '@gravity-ui/uikit'

export const documentTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'filename',
		name: 'Название',
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
