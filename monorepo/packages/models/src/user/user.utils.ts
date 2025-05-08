import { EnumType, SelectOption } from '@stroy/types'

import { IUser } from './user.types'

export const userFullName = (user: IUser) => {
	return `${user.first_name} ${user.last_name}`
}

export const useInitial = (user: IUser) => {
	return `${user.first_name[0]}${user.last_name[0]}`
}

export const UserRole = {
	ADMIN: 'ADMIN',
	OFFICER: 'OFFICER',
} as const

export type UserRole = EnumType<typeof UserRole>

export const UserRoleMapper: Record<UserRole, string> = {
	[UserRole.ADMIN]: 'Администратор',
	[UserRole.OFFICER]: 'Сотрудник',
}

export const UserRoleOptions: SelectOption[] = [
	{
		content: UserRoleMapper[UserRole.ADMIN],
		value: UserRole.ADMIN,
	},
	{
		content: UserRoleMapper[UserRole.OFFICER],
		value: UserRole.OFFICER,
	},
]
