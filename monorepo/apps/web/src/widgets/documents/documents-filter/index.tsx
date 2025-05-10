import { Flex } from '@gravity-ui/uikit'

import { DocumentsCogs } from '~widgets/documents/documents-filter/documents-cogs'
import DocumentsOrdering from '~widgets/documents/documents-filter/documents-ordering'
import DocumentsSearch from '~widgets/documents/documents-filter/documents-search'
import DocumentsView from '~widgets/documents/documents-filter/documents-view'

export default function DocumentsFilter() {
	return (
		<Flex alignItems={'center'} gap={3}>
			<DocumentsSearch />
			<DocumentsCogs />
			<DocumentsOrdering />
			<DocumentsView />
		</Flex>
	)
}
