import { match } from 'ts-pattern'

import { DocumentApproveButton, DocumentDraftButton } from '~models/document'

import {
	DocumentStatus,
	GuardOperation,
	hasPermission,
	PropsWithDocument,
} from '@stroy/models'

export const DocumentAction = ({ document }: PropsWithDocument) => {
	if (!hasPermission(document.permissions, GuardOperation.APPROVE))
		return null

	return match(document.status)
		.with(DocumentStatus.APPROVED, () => (
			<DocumentDraftButton document={document.id} />
		))
		.otherwise(() => <DocumentApproveButton document={document.id} />)
}
