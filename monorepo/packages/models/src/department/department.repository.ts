import { http } from '../request'

import { departmentServiceKeys } from './department.config'
import { IDepartmentIndicator } from './department.types'

export class DepartmentRepository {
	static getIndicators() {
		return http.get<IDepartmentIndicator>(
			`${departmentServiceKeys.indicators}/`,
		)
	}
}
