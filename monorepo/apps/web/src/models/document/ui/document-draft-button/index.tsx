import { Tray } from '@gravity-ui/icons'

import {
	DocumentStatus,
	PropsWithDocumentId,
	useUpdateDocument,
} from '@stroy/models'
import { query } from '@stroy/toolkit'

import { Action } from '~packages/ui'

export const DocumentDraftButton = ({
	document,
}: PropsWithAction<PropsWithDocumentId>) => {
	const req = useUpdateDocument(document)

	const onClick = async () => {
		await query(() =>
			req.mutateAsync({
				status: DocumentStatus.DRAFT,
			}),
		)
	}

	return (
		<Action
			view={'outlined-info'}
			selected={true}
			icon={Tray}
			loading={req.isPending}
			onClick={onClick}
		>
			В черновики
		</Action>
	)
}
