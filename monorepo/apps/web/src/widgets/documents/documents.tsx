import { useDocumentsStore } from '~widgets/documents/documents.hooks'

import DocumentList from '~features/document-list'
import ModelTable from '~features/model-table'
import TableSkeleton from '~features/table-skeleton'
import useDocumentTableData from '~features/use-document-table-data'

import { documentTableColumns } from '~models/document'

import { RenderFetchData } from '~packages/lib'
import { Placeholder } from '~packages/ui'

export default function Documents() {
	const { list, error, loading, count, filter } = useDocumentsStore()

	const data = useDocumentTableData(list)

	return (
		<RenderFetchData
			hasError={error}
			isLoading={loading}
			countData={count}
			loadingFallback={<TableSkeleton />}
		>
			{filter.view === 'table' && (
				<ModelTable
					data={data}
					columns={documentTableColumns}
					emptyMessage={<Placeholder />}
				/>
			)}
			{filter.view === 'list' && <DocumentList documents={list} />}
		</RenderFetchData>
	)
}
