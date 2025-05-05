import { useStore } from '@tanstack/react-store'

import { projectsStore } from '~widgets/projects/projects.store'

export const useProjectsStore = () => {
	return useStore(projectsStore)
}
