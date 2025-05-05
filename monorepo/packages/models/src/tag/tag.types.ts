import { UseModelOptions } from '@stroy/types'
import { z } from 'zod'

import { CreateTagSchema, TagSchema, UpdateTagSchema } from './tag.schema'

export type ITag = z.infer<typeof TagSchema>

export type IUpdateTag = z.infer<typeof UpdateTagSchema>

export type ICreateTag = z.infer<typeof CreateTagSchema>

export interface UseTags extends UseModelOptions {}
