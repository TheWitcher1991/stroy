import { useDocumentsStore } from '~widgets/documents/documents.hooks'

import { DocumentList, useDocumentTableData } from '~features/document'
import { ModelTable, TableSkeleton } from '~features/shared'

import { documentTableColumns } from '~models/document'

import { RenderFetchData } from '~packages/lib'
import { Grid, Placeholder } from '~packages/ui'

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
			{filter.view === 'list' && (
				<Grid gap={20} gridTemplateColumns={'repeat(3, 1fr)'}>
					<DocumentList documents={list} />
				</Grid>
			)}
		</RenderFetchData>
	)
}
