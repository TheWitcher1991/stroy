import { useMemo } from 'react'

import { IProject } from '~models/project'

export default function useProjectTableData(projects: IProject[]) {
	return useMemo(() => projects.map(project => ({})), [projects])
}
