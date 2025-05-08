import ModelTable from '~features/model-table'
import useDocumentVersionTableData from '~features/use-document-version-table-data'

import { documentVersionTableColumns } from '~models/document'

import { PropsWithDocument } from '@stroy/models'

import { Placeholder } from '~packages/ui'

export default function DocumentVersion({ document }: PropsWithDocument) {
	const data = useDocumentVersionTableData(document.versions)

	return (
		<ModelTable
			data={data}
			columns={documentVersionTableColumns}
			emptyMessage={<Placeholder />}
		/>
	)
}
