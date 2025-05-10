'use client'

import { useMemo, useState } from 'react'

import DocumentActions from '~widgets/document/document-actions'
import DocumentHistory from '~widgets/document/document-history'
import DocumentInfo from '~widgets/document/document-info'
import DocumentTabs, { DocumentTab } from '~widgets/document/document-tabs'
import DocumentVersion from '~widgets/document/document-version'

import { PermissionButton } from '~models/permission'

import { PropsWithDocument } from '@stroy/models'

import { Group, PageTitle } from '~packages/ui'

export default function Document({ document }: PropsWithDocument) {
	const [index, setIndex] = useState<DocumentTab>('1')

	const tabsContent = useMemo(() => {
		switch (index) {
			case '1':
				return <DocumentInfo document={document} />
			case '2':
				return <DocumentHistory document={document} />
			case '3':
				return <DocumentVersion document={document} />
		}
	}, [index, document])

	return (
		<Group>
			<PageTitle
				title={document.title}
				subtitle={document.doc_number}
				action={<PermissionButton document={document.id} />}
			/>
			<DocumentActions document={document} />
			<DocumentTabs index={index} setIndex={index => setIndex(index)} />
			{tabsContent}
		</Group>
	)
}
