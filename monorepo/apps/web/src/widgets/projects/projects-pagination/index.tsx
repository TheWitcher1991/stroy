import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import {
	projectsActions,
	projectsState,
} from '~widgets/projects/projects.store'

import { PAGE_SIZE_OPTIONS } from '~packages/system'

export default function ProjectsPagination() {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'}>Всего {projectsState.count}</Text>
			<Pagination
				page={projectsState.filter.page}
				pageSize={projectsState.filter.page_size}
				total={projectsState.count}
				compact={true}
				showInput={true}
				showPages={true}
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				onUpdate={(page, pageSize) => {
					projectsActions.setFilter({
						page,
						page_size: pageSize,
					})
				}}
			/>
		</Flex>
	)
}
