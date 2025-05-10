import { GuardSchema } from '../guard'
import { UserSchema } from '../user'
import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

export const PermissionSchema = z.object({
	document: zShape.id,
	guard: GuardSchema,
	user: UserSchema,
})

export const UpdatePermissionSchema = z.object({
	guard: zShape.id,
	user: zShape.id,
})

export const CreatePermissionSchema = z.object({
	guard: GuardSchema,
	user: UserSchema,
})
