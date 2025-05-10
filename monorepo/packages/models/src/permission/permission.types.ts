import { z } from 'zod'

import { UseModelOptions } from '@stroy/types'

import {
	CreatePermissionSchema,
	PermissionSchema,
	UpdatePermissionSchema,
} from './permission.schema'

export type IPermission = z.infer<typeof PermissionSchema>

export type IUpdatePermission = z.infer<typeof UpdatePermissionSchema>

export type ICreatePermission = z.infer<typeof CreatePermissionSchema>

export interface PropsWithPermission {
	permission: IPermission
}

export interface PropsWithPermissionId {
	document: number
}

export interface UsePermissions extends UseModelOptions {}
