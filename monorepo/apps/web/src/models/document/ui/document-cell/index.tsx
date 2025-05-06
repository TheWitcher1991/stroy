import {
	FileLetterP,
	FileLetterW,
	FileText,
	MathOperations,
	MusicNote,
	Picture,
} from '@gravity-ui/icons'
import { Flex, Icon, IconData, Text } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

import { href } from '@stroy/href'
import { DocumentType, PropsWithDocument } from '@stroy/models'

import styles from './index.module.scss'

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
		<Flex gap={2} alignItems={'center'} onClick={onClick}>
			<span className={styles.documentCellIcon}>
				<Icon
					data={documentIcon[document.doc_type] as IconData}
					size={19}
				/>
			</span>
			<Flex direction={'column'}>
				<Text>{document.title}</Text>
				<Text variant={'body-short'} color={'secondary'}>
					{document.doc_number}
				</Text>
			</Flex>
		</Flex>
	)
})
