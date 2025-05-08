import { TableColumnConfig } from '@gravity-ui/uikit'

export const projectTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'project',
		name: 'Проект',
		width: '20%',
	},
	{
		id: 'status',
		name: 'Статус',
		width: '20%',
	},
	{
		id: 'documents',
		name: 'Документов',
		width: '15%',
	},
	{
		id: 'start_date',
		name: 'Дата начала',
		width: '15%',
	},
	{
		id: 'end_date',
		name: 'Дата дедлайна',
		width: '15%',
	},
	{
		id: 'actions',
		align: 'right',
		name: 'Действия',
		width: '20%',
	},
]
