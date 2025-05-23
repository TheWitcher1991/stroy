import { useDocumentVersionTableData } from '~features/document'
import { ModelTable } from '~features/shared'

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
