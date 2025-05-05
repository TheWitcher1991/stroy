import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { documentsActions } from '~widgets/documents'
import { useDocumentsStore } from '~widgets/documents/documents.hooks'

import { PAGE_SIZE_OPTIONS } from '@stroy/system'

export default function DocumentsPagination() {
	const { count, filter } = useDocumentsStore()

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
					documentsActions.setFilter({ page, page_size: pageSize })
				}}
			/>
		</Flex>
	)
}
