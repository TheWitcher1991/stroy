import { EnumType, SelectOption } from '@stroy/types'

export const hasPermission = (
	permissions: GuardOperation[],
	permission: GuardOperation,
): boolean => permissions.indexOf(permission) !== -1

export const GuardOperation = {
	CREATE: 'CREATE',
	READ: 'READ',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	RESTORE: 'RESTORE',
	APPROVE: 'APPROVE',
	ARCHIVE: 'ARCHIVE',
} as const

export type GuardOperation = EnumType<typeof GuardOperation>

export const GuardOperationMapper: Record<GuardOperation, string> = {
	[GuardOperation.CREATE]: 'Создание',
	[GuardOperation.READ]: 'Чтение',
	[GuardOperation.UPDATE]: 'Обновление',
	[GuardOperation.DELETE]: 'Удаление',
	[GuardOperation.RESTORE]: 'Восстановление',
	[GuardOperation.APPROVE]: 'Утверждение',
	[GuardOperation.ARCHIVE]: 'Архивация',
}

export const GuardSelectOptions: SelectOption<GuardOperation>[] =
	Object.entries(GuardOperationMapper).map(([value, label]) => ({
		value: value as GuardOperation,
		content: label,
	}))
