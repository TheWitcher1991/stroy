'use client'

import { useMount } from 'ahooks'
import { use } from 'react'

import Document from '~widgets/document'
import { setBreadcrumbs } from '~widgets/nav'

import { IDocument, toDocumentID, useDocument } from '@stroy/models'
import { generateBreadcrumbs } from '@stroy/toolkit'

import { RenderFetchData } from '~packages/lib'

export default function DocumentPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)
	const { isLoading, isError, data } = useDocument(toDocumentID(id))

	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'documents',
				variant: 'view',
			}),
		)
	})

	return (
		<RenderFetchData isLoading={isLoading} hasError={isError}>
			<Document document={data?.data as IDocument} />
		</RenderFetchData>
	)
}
