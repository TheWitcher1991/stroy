import { useMemo } from 'react'

import { IProject } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

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
