import { TableColumnConfig } from '@gravity-ui/uikit'

export const JournalAction = {
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	RESTORE: 'RESTORE',
	APPROVE: 'APPROVE',
} as const

export type JournalAction = EnumType<typeof JournalAction>

export const JournalActionMapper: Record<JournalAction, string> = {
	CREATE: 'Создан',
	UPDATE: 'Обновлен',
	DELETE: 'Удален',
	RESTORE: 'Восстановлен',
	APPROVE: 'Подтвержден',
}

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
