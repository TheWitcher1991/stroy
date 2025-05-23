'use client'

import { useDeferredValue } from 'react'

import { DocumentCard } from '~models/document'

import { IDocument } from '@stroy/models'

interface DocumentListProps {
	documents: IDocument[]
}

export default function DocumentList({ documents }: DocumentListProps) {
	const list = useDeferredValue(documents)

	return list.map(document => (
		<DocumentCard key={document.id} document={document} />
	))
}
