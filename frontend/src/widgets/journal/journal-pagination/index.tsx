import { Flex, Pagination, Text } from '@gravity-ui/uikit'

import { PAGE_SIZE_OPTIONS } from '~packages/system'

export default function JournalPagination() {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'}>Всего 0</Text>
			<Pagination
				page={1}
				pageSize={30}
				total={0}
				compact={true}
				showInput={true}
				showPages={true}
				pageSizeOptions={PAGE_SIZE_OPTIONS}
				onUpdate={(page, pageSize) => {}}
			/>
		</Flex>
	)
}
