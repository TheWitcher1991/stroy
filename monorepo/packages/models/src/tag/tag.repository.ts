import { http } from '../request'
import { CrudRepository } from '@stroy/toolkit'

import { tagServiceKeys } from './tag.config'
import { ICreateTag, ITag, IUpdateTag, UseTags } from './tag.types'

const TagRepositoryBuilder = () => {
	return new CrudRepository<ITag[], ITag, ICreateTag, IUpdateTag, UseTags>(
		http.instance,
		tagServiceKeys.tags,
	)
}

export const TagRepository = TagRepositoryBuilder()
