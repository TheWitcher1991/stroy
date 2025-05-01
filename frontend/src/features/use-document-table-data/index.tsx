import { useMemo } from 'react'

import { IDocument } from '~models/document'
import { userFullName } from '~models/user'

import { formatDateInRu } from '~packages/utils'

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
