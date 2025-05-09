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
} as const

export type GuardOperation = EnumType<typeof GuardOperation>

export const GuardOperationMapper: Record<GuardOperation, string> = {
	[GuardOperation.CREATE]: 'Создание',
	[GuardOperation.READ]: 'Чтение',
	[GuardOperation.UPDATE]: 'Обновление',
	[GuardOperation.DELETE]: 'Удаление',
	[GuardOperation.RESTORE]: 'Восстановление',
	[GuardOperation.APPROVE]: 'Утверждение',
}

export const GuardSelectOptions: SelectOption[] = [
	{
		content: GuardOperationMapper[GuardOperation.CREATE],
		value: GuardOperation.CREATE,
	},
	{
		content: GuardOperationMapper[GuardOperation.READ],
		value: GuardOperation.READ,
	},
	{
		content: GuardOperationMapper[GuardOperation.UPDATE],
		value: GuardOperation.UPDATE,
	},
	{
		content: GuardOperationMapper[GuardOperation.DELETE],
		value: GuardOperation.DELETE,
	},
	{
		content: GuardOperationMapper[GuardOperation.RESTORE],
		value: GuardOperation.RESTORE,
	},
	{
		content: GuardOperationMapper[GuardOperation.APPROVE],
		value: GuardOperation.APPROVE,
	},
]
