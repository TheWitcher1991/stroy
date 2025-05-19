'use client'

import { useMount } from 'ahooks'
import { useGate } from 'effector-react'

import Documents, {
	DocumentsFetcher,
	DocumentsFilter,
	DocumentsPagination,
} from '~widgets/documents'
import { setBreadcrumbs } from '~widgets/nav'
import WorkspaceData, { workSpaceData } from '~widgets/workspace-data'

import { Group, PageTitle } from '~packages/ui'

export default function Workspace() {
	useGate(workSpaceData.WorkSpaceGate)

	useMount(() => {
		setBreadcrumbs([
			{
				text: 'Дашборд',
				href: '/',
			},
		])
	})

	return (
		<Group>
			<WorkspaceData />
			<PageTitle
				title={'Последние документы'}
				subtitle={'Все последние документы в этом рабочем пространстве'}
			/>
			<DocumentsFilter />
			<Documents />
			<DocumentsFetcher />
			<DocumentsPagination />
		</Group>
	)
}
