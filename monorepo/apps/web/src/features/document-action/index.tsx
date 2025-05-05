import { DocumentApproveButton, DocumentDraftButton } from '~models/document'

import { DocumentStatus, PropsWithDocument } from '@stroy/models'

export const DocumentAction = ({ document }: PropsWithDocument) => {
	if (document.status === DocumentStatus.APPROVED)
		return <DocumentDraftButton document={document.id} />
	else return <DocumentApproveButton document={document.id} />
}
