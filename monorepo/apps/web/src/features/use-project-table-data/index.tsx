import { useMemo } from 'react'

import { ProjectDeleteButton, ProjectEditButton } from '~models/project'

import { IProject } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions, Indicator } from '~packages/ui'

export default function useProjectTableData(projects: IProject[]) {
	return useMemo(
		() =>
			projects.map(project => ({
				project: project.title,
				documents: <Indicator count={project.documents} />,
				created: formatDateInRu(project.created_at),
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
