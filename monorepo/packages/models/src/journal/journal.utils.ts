import { EnumType } from '@stroy/types'

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
