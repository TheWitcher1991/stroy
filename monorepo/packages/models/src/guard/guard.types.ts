import { UseModelOptions } from '@stroy/types'
import { z } from 'zod'

import {
	CreateGuardSchema,
	GuardSchema,
	UpdateGuardSchema,
} from './guard.schema'

export type IGuard = z.infer<typeof GuardSchema>

export type IUpdateGuard = z.infer<typeof UpdateGuardSchema>

export type ICreateGuard = z.infer<typeof CreateGuardSchema>

export interface UseGuards extends UseModelOptions {}
