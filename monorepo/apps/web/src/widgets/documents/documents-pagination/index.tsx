import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { documentsActions, documentsState } from '~widgets/documents'

import { PAGE_SIZE_OPTIONS } from '~packages/system'

export default function DocumentsPagination() {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'}>Всего {documentsState.count}</Text>
			<Pagination
				page={documentsState.filter.page}
				pageSize={documentsState.filter.page_size}
				total={documentsState.count}
				compact={true}
				showInput={true}
				showPages={true}
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				onUpdate={(page, pageSize) => {
					documentsActions.setFilter({ page, page_size: pageSize })
				}}
			/>
		</Flex>
	)
}
