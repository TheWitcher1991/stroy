import {
	FileLetterP,
	FileLetterW,
	FileText,
	MathOperations,
	MusicNote,
	Picture,
} from '@gravity-ui/icons'
import { IconData } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

import { href } from '@stroy/href'
import { DocumentType, PropsWithDocument } from '@stroy/models'

import { Cell } from '~packages/ui'

const documentIcon = {
	[DocumentType.image]: Picture,
	[DocumentType.pdf]: FileLetterP,
	[DocumentType.word]: FileLetterW,
	[DocumentType.excel]: MathOperations,
	[DocumentType.video]: MusicNote,
	[DocumentType.audio]: MusicNote,
	[DocumentType.text]: FileText,
	[DocumentType.other]: FileText,
	[DocumentType.unknown]: FileText,
}

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
