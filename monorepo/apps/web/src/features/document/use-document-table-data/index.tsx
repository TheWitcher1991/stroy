import { useMemo } from 'react'

import {
	DocumentCell,
	DocumentDeleteButton,
	DocumentDownloadButton,
	DocumentEditButton,
} from '~models/document'
import { TagLabel } from '~models/tag'
import { UserCell } from '~models/user'

import { IDocument } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions } from '~packages/ui'

export default function useDocumentTableData(documents: IDocument[]) {
	return useMemo(
		() =>
			documents.map(document => ({
				filename: <DocumentCell document={document} />,
				author: <UserCell user={document.author} />,
				tag: document.tag && <TagLabel tag={document.tag} />,
				project: document.project.title,
				created: formatDateInRu(document.created_at),
				actions: (
					<Actions justifyContent={'end'}>
						<DocumentDownloadButton
							file={document.file}
							onlyIcon={true}
						/>
						<DocumentEditButton
							document={document}
							onlyIcon={true}
						/>
						<DocumentDeleteButton
							document={document}
							onlyIcon={true}
						/>
					</Actions>
				),
			})),
		[documents],
	)
}
