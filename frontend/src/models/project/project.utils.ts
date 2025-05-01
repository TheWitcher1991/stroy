import { TableColumnConfig } from '@gravity-ui/uikit'

export const ProjectStatus = {
	ACTIVE: 'ACTIVE',
	FINISHED: 'FINISHED',
} as const

export type ProjectStatus = EnumType<typeof ProjectStatus>

export const ProjectStatusMapper: Record<ProjectStatus, string> = {
	ACTIVE: 'Активный',
	FINISHED: 'Завершен',
}

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
