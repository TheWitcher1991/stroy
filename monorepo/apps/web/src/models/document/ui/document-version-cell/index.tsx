import { memo } from 'react'

import { documentIconComponent } from '~models/document'

import { PropsWithDocumentVersion } from '@stroy/models'
import { formatBytes } from '@stroy/toolkit'

import { Cell } from '~packages/ui'

export const DocumentVersionCell = memo(
	({ version }: PropsWithDocumentVersion) => {
		return (
			<Cell
				iconComponent={documentIconComponent[version.doc_type]}
				title={version.doc_title}
				subtitle={`${version.doc_type} — ${formatBytes(version.size, 'kb')}`}
			/>
		)
	},
)
