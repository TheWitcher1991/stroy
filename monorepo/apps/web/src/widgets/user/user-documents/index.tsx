import { useDocumentTableData } from '~features/document'
import { ModelTable } from '~features/shared'

import { documentTableColumns } from '~models/document'

import { IDocument } from '@stroy/models'

import { Placeholder } from '~packages/ui'

export default function UserDocuments({
	documents,
}: {
	documents: IDocument[]
}) {
	const data = useDocumentTableData(documents)

	return (
		<ModelTable
			data={data}
			columns={documentTableColumns}
			emptyMessage={<Placeholder />}
		/>
	)
}
