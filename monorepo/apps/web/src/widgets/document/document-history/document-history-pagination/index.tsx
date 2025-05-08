import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { useDocumentHistoryStore } from '~widgets/document/document-history/index.hooks'
import { documentHistoryActions } from '~widgets/document/document-history/index.store'

import { PAGE_SIZE_OPTIONS } from '@stroy/system'

export default function DocumentHistoryPagination() {
	const { filter, count } = useDocumentHistoryStore()

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
					documentHistoryActions.setFilter({
						page,
						page_size: pageSize,
					})
				}}
			/>
		</Flex>
	)
}
