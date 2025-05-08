import { IconData } from '@gravity-ui/uikit'
import { memo } from 'react'

import { documentIcon } from '~models/document'

import { PropsWithDocumentVersion } from '@stroy/models'
import { formatBytes } from '@stroy/toolkit'

import { Cell } from '~packages/ui'

export const DocumentVersionCell = memo(
	({ version }: PropsWithDocumentVersion) => {
		return (
			<Cell
				icon={documentIcon[version.doc_type] as IconData}
				title={version.doc_title}
				subtitle={`${version.doc_type} — ${formatBytes(version.size, 'kb')}`}
			/>
		)
	},
)
