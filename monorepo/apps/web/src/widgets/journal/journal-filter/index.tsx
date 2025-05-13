import { Flex } from '@gravity-ui/uikit'

import JournalSearch from '~widgets/journal/journal-filter/journal-search'

export default function JournalFilter() {
	return (
		<Flex alignItems={'center'} gap={3}>
			<JournalSearch />
		</Flex>
	)
}
