import { Flex } from '@gravity-ui/uikit'

import ProjectsSearch from '~widgets/projects/projects-filter/projects-search'

export default function ProjectsFilter() {
	return (
		<Flex alignItems={'center'} gap={3}>
			<ProjectsSearch />
		</Flex>
	)
}
