import { useMemo } from 'react'

import { ITag } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function useTagTableData(tags: ITag[]) {
	return useMemo(
		() =>
			tags.map(tag => ({
				tag: tag.title,
				summary: tag.summary,
				documents: tag.documents,
				created: formatDateInRu(tag.created_at),
				actions: <></>,
			})),
		[tags],
	)
}
