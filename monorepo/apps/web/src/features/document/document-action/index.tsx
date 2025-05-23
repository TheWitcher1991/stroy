import { match } from 'ts-pattern'

import {
	DocumentApproveButton,
	DocumentArchiveButton,
	DocumentPublishButton,
	DocumentUnarchiveButton,
} from '~models/document'

import {
	DocumentStatus,
	GuardOperation,
	hasPermission,
	PropsWithDocument,
} from '@stroy/models'

export default function DocumentAction({ document }: PropsWithDocument) {
	return match(document)
		.with(
			{ status: DocumentStatus.HARMONIZATION },
			{
				when: doc =>
					hasPermission(doc.permissions, GuardOperation.APPROVE),
			},
			doc => <DocumentApproveButton document={doc.id} />,
		)
		.with(
			{ status: DocumentStatus.APPROVED },
			{
				when: doc =>
					hasPermission(doc.permissions, GuardOperation.ARCHIVE),
			},
			doc => <DocumentArchiveButton document={doc.id} />,
		)
		.with(
			{ status: DocumentStatus.ARCHIVE },
			{
				when: doc =>
					hasPermission(doc.permissions, GuardOperation.RESTORE),
			},
			doc => <DocumentUnarchiveButton document={doc.id} />,
		)
		.otherwise(() => <DocumentPublishButton document={document.id} />)
}
