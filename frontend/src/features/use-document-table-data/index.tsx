import { useMemo } from 'react'

import { IDocument } from '~models/document'

export default function useDocumentTableData(documents: IDocument[]) {
	return useMemo(() => documents.map(document => ({})), [documents])
}
