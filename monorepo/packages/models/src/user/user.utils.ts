import { IUser } from './user.types'

export const userFullName = (user: IUser) => {
	return `${user.first_name} ${user.last_name}`
}
