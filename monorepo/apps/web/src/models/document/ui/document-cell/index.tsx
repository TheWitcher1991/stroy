import { IconData } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

import { documentIcon } from '~models/document'

import { href } from '@stroy/href'
import { PropsWithDocument } from '@stroy/models'

import { Cell } from '~packages/ui'

export const DocumentCell = memo(({ document }: PropsWithDocument) => {
	const router = useRouter()

	const onClick = useCallback(
		() => router.replace(href.documents.byId(document.id)),
		[document.id, router],
	)

	return (
		<Cell
			onClick={onClick}
			icon={documentIcon[document.doc_type] as IconData}
			title={document.title}
			subtitle={document.doc_number}
		/>
	)
})
