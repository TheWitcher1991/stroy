import { CopyCheck } from '@gravity-ui/icons'

import {
	DocumentStatus,
	PropsWithDocumentId,
	useUpdateDocument,
} from '@stroy/models'
import { query } from '@stroy/toolkit'

import { Action } from '~packages/ui'

export const DocumentApproveButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocumentId>) => {
	const req = useUpdateDocument(document)

	const onClick = async () => {
		await query(() =>
			req.mutateAsync({
				status: DocumentStatus.APPROVED,
			}),
		)
	}

	return (
		<Action
			view={'action'}
			icon={CopyCheck}
			onlyIcon={onlyIcon}
			onClick={onClick}
			loading={req.isPending}
		>
			Утвердить
		</Action>
	)
}
