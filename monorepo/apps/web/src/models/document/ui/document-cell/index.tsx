import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

import { documentIconComponent } from '~models/document'

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
			iconComponent={documentIconComponent[document.doc_type]}
			title={document.title}
			subtitle={document.doc_number}
		/>
	)
})
