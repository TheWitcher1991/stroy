import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import { CreateTagSchema, TagSchema, UpdateTagSchema } from './tag.schema'

export type TagID = Branded<number, 'TagID'>

export type ITag = z.infer<typeof TagSchema>

export type IUpdateTag = z.infer<typeof UpdateTagSchema>

export type ICreateTag = z.infer<typeof CreateTagSchema>

export interface UseTags extends UseModelOptions {}

export interface PropsWithTag {
	tag: ITag
}

export interface PropsWithTagId {
	tag: TagID
}
