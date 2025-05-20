'use client'

import { Flex } from '@gravity-ui/uikit'
import { useGate } from 'effector-react'

import DocumentsApproval from '~widgets/dashkit/documents-approval'
import LatestTasks from '~widgets/dashkit/latest-tasks'
import WorkspaceData, { workSpaceData } from '~widgets/dashkit/workspace-data'
import Documents, {
	DocumentsFetcher,
	DocumentsFilter,
} from '~widgets/documents'

import { Group, PageTitle } from '~packages/ui'

export default function Workspace() {
	useGate(workSpaceData.WorkSpaceGate)

	return (
		<Group>
			<WorkspaceData />
			<Flex alignItems={'center'} gap={5}>
				<DocumentsApproval />
				<LatestTasks />
			</Flex>
			<PageTitle
				title={'Последние документы'}
				subtitle={'Все последние документы в этом рабочем пространстве'}
			/>
			<DocumentsFilter />
			<Documents />
			<DocumentsFetcher />
		</Group>
	)
}
