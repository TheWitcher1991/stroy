import { useMemo } from 'react'

import { IDocument, userFullName } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function useDocumentTableData(documents: IDocument[]) {
	return useMemo(
		() =>
			documents.map(document => ({
				filename: document.title,
				project: document.project.title,
				tag: document.tag?.title,
				author: userFullName(document.author),
				created: formatDateInRu(document.created_at),
				actions: <></>,
			})),
		[documents],
	)
}
