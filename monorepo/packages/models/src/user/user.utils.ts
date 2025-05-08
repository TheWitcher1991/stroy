import { IUser } from './user.types'

export const userFullName = (user: IUser) => {
	return `${user.first_name} ${user.last_name}`
}

export const useInitial = (user: IUser) => {
	return `${user.first_name[0]}${user.last_name[0]}`
}
