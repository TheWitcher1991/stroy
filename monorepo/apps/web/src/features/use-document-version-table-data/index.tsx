import { useMemo } from 'react'

import { DocumentDownloadButton } from '~models/document'
import { DocumentVersionCell } from '~models/document'
import { UserCell } from '~models/user'

import { IDocumentVersion } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions } from '~packages/ui'

export default function useDocumentVersionTableData(
	versions: IDocumentVersion[],
) {
	return useMemo(
		() =>
			versions.map(version => ({
				filename: <DocumentVersionCell version={version} />,
				modified_by: <UserCell user={version.modified_by} />,
				created: formatDateInRu(version.created_at),
				actions: (
					<Actions justifyContent={'end'}>
						<DocumentDownloadButton
							file={version.file}
							onlyIcon={true}
						/>
					</Actions>
				),
			})),
		[versions],
	)
}
