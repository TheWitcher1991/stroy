import { Flex } from '@gravity-ui/uikit'

import TagsSearch from '~widgets/tags/tags-filter/tags-search'

export default function TagsFilter() {
	return (
		<Flex alignItems={'center'} gap={3}>
			<TagsSearch />
		</Flex>
	)
}
