import { Archive } from '@gravity-ui/icons'

import {
	DocumentStatus,
	PropsWithDocumentId,
	useUpdateDocument,
} from '@stroy/models'
import { query } from '@stroy/toolkit'

import { Action } from '~packages/ui'

export const DocumentArchiveButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocumentId>) => {
	const req = useUpdateDocument(document)

	const onClick = async () => {
		await query(() =>
			req.mutateAsync({
				status: DocumentStatus.ARCHIVE,
			}),
		)
	}

	return (
		<Action
			view={'action'}
			icon={Archive}
			onlyIcon={onlyIcon}
			onClick={onClick}
			loading={req.isPending}
		>
			В архив
		</Action>
	)
}
