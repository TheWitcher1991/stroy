import { Flex } from '@gravity-ui/uikit'

import GuardsSearch from '~widgets/guards/guards-filter/guards-search'

export default function GuardsFilter() {
	return (
		<Flex alignItems={'center'} gap={3}>
			<GuardsSearch />
		</Flex>
	)
}
