import { DepartmentID } from './department.types'

export const toDepartmentID = (id: number | string): DepartmentID =>
	Number(id) as DepartmentID
