import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import {
	CreatePermissionSchema,
	PermissionSchema,
	UpdatePermissionSchema,
} from './permission.schema'

export type PermissionID = Branded<number, 'PermissionID'>

export type IPermission = z.infer<typeof PermissionSchema>

export type IUpdatePermission = z.infer<typeof UpdatePermissionSchema>

export type ICreatePermission = z.infer<typeof CreatePermissionSchema>

export interface PropsWithPermission {
	permission: IPermission
}

export interface PropsWithPermissionId {
	document: PermissionID
}

export interface UsePermissions extends UseModelOptions {}
