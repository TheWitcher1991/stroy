import { documentsState } from '~widgets/documents/documents.store'

import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useDocumentTableData from '~features/use-document-table-data'

import { documentTableColumns } from '~models/document'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Documents() {
	const data = useDocumentTableData(documentsState.list)

	return (
		<RenderFetchData
			isLoading={documentsState.loading}
			countData={documentsState.count}
			loadingFallback={<TableSkeleton />}
		>
			<ModelTable
				data={data}
				columns={documentTableColumns}
				emptyMessage={<Placeholder />}
			/>
		</RenderFetchData>
	)
}
