'use client'

import Documents, {
	DocumentsFetcher,
	DocumentsFilter,
	DocumentsPagination,
} from '~widgets/documents'

import { Group, PageTitle } from '~packages/ui'

export default function DocumentsPage() {
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
