import { http } from '../request'

import { CrudRepository } from '@stroy/toolkit'

import { tagServiceKeys } from './tag.config'
import { ICreateTag, ITag, IUpdateTag, UseTags } from './tag.types'

export const TagRepository = new CrudRepository<
	ITag[],
	ITag,
	ICreateTag,
	IUpdateTag,
	UseTags
>(http.instance, tagServiceKeys.tags)
