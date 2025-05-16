import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { setFilter, useProjectsStore } from '~widgets/projects'

import { PAGE_SIZE_OPTIONS } from '@stroy/system'

export default function ProjectsPagination() {
	const { filter, count } = useProjectsStore()

	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'}>Всего {count}</Text>
			<Pagination
				page={filter.page}
				pageSize={filter.page_size}
				total={count}
				compact={true}
				showInput={true}
				showPages={true}
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				onUpdate={(page, pageSize) => {
					setFilter({
						page,
						page_size: pageSize,
					})
				}}
			/>
		</Flex>
	)
}
