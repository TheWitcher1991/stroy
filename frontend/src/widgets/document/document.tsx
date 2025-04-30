import { IDocument } from '~models/document'

import { Group, PageTitle } from '~packages/ui'

interface DocumentProps {
	document: IDocument
}

export default function Document({ document }: DocumentProps) {
	return (
		<Group>
			<PageTitle title={document.title} subtitle={document.doc_number} />
		</Group>
	)
}
