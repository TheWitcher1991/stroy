import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import {
	CreateGuardSchema,
	GuardSchema,
	UpdateGuardSchema,
} from './guard.schema'

export type GuardID = Branded<number, 'GuardID'>

export type IGuard = z.infer<typeof GuardSchema>

export type IUpdateGuard = z.infer<typeof UpdateGuardSchema>

export type ICreateGuard = z.infer<typeof CreateGuardSchema>

export interface UseGuards extends UseModelOptions {}

export interface PropsWithGuard {
	guard: IGuard
}

export interface PropsWithGuardId {
	guard: GuardID
}
