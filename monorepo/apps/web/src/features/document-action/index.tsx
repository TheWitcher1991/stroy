import { match } from 'ts-pattern'

import { DocumentApproveButton, DocumentDraftButton } from '~models/document'

import {
	DocumentStatus,
	GuardOperation,
	hasPermission,
	PropsWithDocument,
	useIam,
} from '@stroy/models'

export const DocumentAction = ({ document }: PropsWithDocument) => {
	const iam = useIam()

	if (
		!hasPermission(document.permissions, GuardOperation.CREATE) &&
		document.author.id !== iam.user
	)
		return null

	return match(document.status)
		.with(DocumentStatus.APPROVED, () => (
			<DocumentDraftButton document={document.id} />
		))
		.otherwise(() => <DocumentApproveButton document={document.id} />)
}
