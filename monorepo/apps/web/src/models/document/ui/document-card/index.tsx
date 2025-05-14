import { Card, Text } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import {
	DocumentDeleteButton,
	DocumentDownloadButton,
	DocumentEditButton,
	DocumentIcon,
} from '~models/document'
import { UserCell } from '~models/user'

import { href } from '@stroy/href'
import { PropsWithDocument } from '@stroy/models'
import { formatBytes, formatDateInRu } from '@stroy/toolkit'

import { Actions } from '~packages/ui'

import styles from './index.module.scss'

export function DocumentCard({ document }: PropsWithDocument) {
	const router = useRouter()

	const onClick = useCallback(
		() => router.replace(href.documents.byId(document.id)),
		[document.id, router],
	)

	return (
		<Card className={styles.documentCard}>
			<Card
				view={'filled'}
				className={styles.documentCardIcon}
				onClick={onClick}
			>
				<DocumentIcon type={document.doc_type} size={28} />
				<Text variant={'body-1'}>{document.title}</Text>
			</Card>
			<div className={styles.documentCardContent}>
				<UserCell user={document.author} />
				<Text color={'secondary'}>
					{document.doc_number} —{' '}
					{formatDateInRu(document.updated_at)} —{' '}
					{formatBytes(document.size, 'kb')}
				</Text>
				<Actions justifyContent={'space-between'}>
					<DocumentDownloadButton
						file={document.file}
						width={'max'}
					/>
					<DocumentEditButton document={document} width={'max'} />
					<DocumentDeleteButton document={document} width={'max'} />
				</Actions>
			</div>
		</Card>
	)
}
