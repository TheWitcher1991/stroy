import { zDocumentId } from '../document'
import { GuardSchema, zGuardId } from '../guard'
import { UserSchema, zUserId } from '../user'
import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

export const zPermissionId = zBrand(zShape.id, 'PermissionID')

export const PermissionSchema = z.object({
	id: zPermissionId,
	document: zDocumentId,
	guard: GuardSchema,
	user: UserSchema,
})

export const UpdatePermissionSchema = z.object({
	guard: zGuardId,
})

export const CreatePermissionSchema = z.object({
	document: zDocumentId,
	guard: zGuardId,
	user: zUserId,
})
