import { z } from 'zod'

import {
	DepartmentIndicatorSchema,
	DepartmentSchema,
} from './department.schema'

export type IDepartment = z.infer<typeof DepartmentSchema>

export type IDepartmentIndicator = z.infer<typeof DepartmentIndicatorSchema>
