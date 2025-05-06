import { useMemo } from 'react'

import { TagDeleteButton, TagEditButton, TagLabel } from '~models/tag'

import { ITag } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions, Indicator } from '~packages/ui'

export default function useTagTableData(tags: ITag[]) {
	return useMemo(
		() =>
			tags.map(tag => ({
				tag: <TagLabel tag={tag} />,
				summary: tag.summary,
				documents: <Indicator count={tag.documents} />,
				created: formatDateInRu(tag.created_at),
				actions: (
					<Actions justifyContent={'end'}>
						<TagEditButton tag={tag} onlyIcon={true} />
						<TagDeleteButton tag={tag.id} onlyIcon={true} />
					</Actions>
				),
			})),
		[tags],
	)
}
