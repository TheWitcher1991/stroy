import { TableColumnConfig } from '@gravity-ui/uikit'

import { IUser } from '~models/user/user.types'

export const userFullName = (user: IUser) => {
	return `${user.first_name} ${user.last_name}`
}

export const userTableColumns: TableColumnConfig<any>[] = [
	{
		id: 'user',
		name: 'Пользователь',
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
