'use client'

import { useMount } from 'ahooks'

import Documents, {
	DocumentsFetcher,
	DocumentsFilter,
	DocumentsPagination,
} from '~widgets/documents'
import { setBreadcrumbs } from '~widgets/nav'

import { generateBreadcrumbs } from '@stroy/toolkit'

import { Group, PageTitle } from '~packages/ui'

export default function DocumentsPage() {
	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'documents',
				variant: 'index',
			}),
		)
	})

	return (
		<Group>
			<PageTitle
				title={'Документы'}
				subtitle={'Все документы в этом рабочем пространстве'}
			/>
			<DocumentsFilter />
			<Documents />
			<DocumentsFetcher />
			<DocumentsPagination />
		</Group>
	)
}
