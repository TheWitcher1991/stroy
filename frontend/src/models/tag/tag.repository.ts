import { tagServiceKeys } from '~models/tag/tag.config'
import { ICreateTag, ITag, IUpdateTag, UseTags } from '~models/tag/tag.types'

import { http } from '~packages/lib'
import { CrudRepository } from '~packages/repositories'

const TagRepositoryBuilder = () => {
	return new CrudRepository<ITag[], ITag, ICreateTag, IUpdateTag, UseTags>(
		http.instance,
		tagServiceKeys.tags,
	)
}

export const TagRepository = TagRepositoryBuilder()
