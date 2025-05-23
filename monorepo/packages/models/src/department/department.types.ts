import { z } from 'zod'

import { Branded } from '@stroy/types'

import {
	DepartmentIndicatorSchema,
	DepartmentSchema,
} from './department.schema'

export type DepartmentID = Branded<number, 'DepartmentID'>

export type IDepartment = z.infer<typeof DepartmentSchema>

export type IDepartmentIndicator = z.infer<typeof DepartmentIndicatorSchema>
