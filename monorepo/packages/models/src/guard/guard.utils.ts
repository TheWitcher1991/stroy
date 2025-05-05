import { EnumType, SelectOption } from '@stroy/types'

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
]
