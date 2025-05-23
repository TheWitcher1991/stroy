import { PermissionID } from './permission.types'

export const toPermissionID = (id: number | string): PermissionID =>
	Number(id) as PermissionID
