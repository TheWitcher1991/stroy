import { EnumType } from '@stroy/types'

export const GuardOperation = {
	CREATE: 'CREATE',
	READ: 'READ',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
} as const

export type GuardOperation = EnumType<typeof GuardOperation>

export const GuardOperationMapper: Record<GuardOperation, string> = {
	[GuardOperation.CREATE]: 'Создание',
	[GuardOperation.READ]: 'Чтение',
	[GuardOperation.UPDATE]: 'Обновление',
	[GuardOperation.DELETE]: 'Удаление',
}
