import { z } from 'zod'

const BaseUserSchema = z.object({})

export const UserSchema = BaseUserSchema.extend({})

export const UpdateUserSchema = BaseUserSchema

export const CreateUserSchema = BaseUserSchema
