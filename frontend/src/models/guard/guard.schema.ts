import { z } from 'zod'

const BaseGuardSchema = z.object({})

export const GuardSchema = BaseGuardSchema.extend({})

export const UpdateGuardSchema = BaseGuardSchema

export const CreateGuardSchema = BaseGuardSchema
