import { EnumType } from '@stroy/types'

import { JournalID } from './journal.types'

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

export const toJournalID = (id: number | string): JournalID =>
	Number(id) as JournalID
