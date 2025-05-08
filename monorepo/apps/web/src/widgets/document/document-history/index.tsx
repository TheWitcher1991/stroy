import DocumentHistoryFetcher from '~widgets/document/document-history/document-history-fetcher'
import DocumentHistoryPagination from '~widgets/document/document-history/document-history-pagination'
import DocumentHistoryRender from '~widgets/document/document-history/document-history-render'

import { PropsWithDocument } from '@stroy/models'

export default function DocumentHistory({ document }: PropsWithDocument) {
	return (
		<>
			<DocumentHistoryFetcher document={document} />
			<DocumentHistoryRender />
			<DocumentHistoryPagination />
		</>
	)
}
