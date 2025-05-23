import { http } from '../request'

import { CrudRepository } from '@stroy/toolkit'

import { guardServiceKeys } from './guard.config'
import { ICreateGuard, IGuard, IUpdateGuard, UseGuards } from './guard.types'

export const GuardRepository = new CrudRepository<
	IGuard[],
	IGuard,
	ICreateGuard,
	IUpdateGuard,
	UseGuards
>(http.instance, guardServiceKeys.guards)
