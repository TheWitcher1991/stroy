import { useMemo } from 'react'

import { IProject } from '~models/project'

import { formatDateInRu } from '~packages/utils'

export default function useProjectTableData(projects: IProject[]) {
	return useMemo(
		() =>
			projects.map(project => ({
				project: project.title,
				documents: project.documents,
				created: formatDateInRu(project.created_at),
				actions: <></>,
			})),
		[projects],
	)
}
