'use client'

import { use } from 'react'

import Document from '~widgets/document'

import { IDocument, useDocument } from '~models/document'

import { RenderFetchData } from '~packages/lib'

export default function DocumentPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)
	const { isLoading, isError, data } = useDocument(Number(id))

	return (
		<RenderFetchData isLoading={isLoading} hasError={isError}>
			<Document document={data?.data as IDocument} />
		</RenderFetchData>
	)
}
