import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { journalActions, journalState } from '~widgets/journal'

import { PAGE_SIZE_OPTIONS } from '~packages/system'

export default function JournalPagination() {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'}>Всего {journalState.filter.page}</Text>
			<Pagination
				page={journalState.filter.page}
				pageSize={journalState.filter.page_size}
				total={journalState.count}
				compact={true}
				showInput={true}
				showPages={true}
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				onUpdate={(page, pageSize) => {
					journalActions.setFilter({
						page,
						page_size: pageSize,
					})
				}}
			/>
		</Flex>
	)
}
