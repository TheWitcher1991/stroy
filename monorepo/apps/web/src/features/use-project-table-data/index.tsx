import { Label, Text } from '@gravity-ui/uikit'
import { useMemo } from 'react'

import { ProjectDeleteButton, ProjectEditButton } from '~models/project'

import { IProject, ProjectStatusMapper } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions, Indicator } from '~packages/ui'

export default function useProjectTableData(projects: IProject[]) {
	return useMemo(
		() =>
			projects.map(project => ({
				project: <Text variant={'body-2'}>{project.title}</Text>,
				status: (
					<Label size={'m'}>
						{ProjectStatusMapper[project.status]}
					</Label>
				),
				documents: <Indicator count={project.documents} />,
				start_date: formatDateInRu(project.start_date),
				end_date: formatDateInRu(project.end_date),
				actions: (
					<Actions justifyContent={'end'}>
						<ProjectEditButton project={project} onlyIcon={true} />
						<ProjectDeleteButton
							project={project.id}
							onlyIcon={true}
						/>
					</Actions>
				),
			})),
		[projects],
	)
}
