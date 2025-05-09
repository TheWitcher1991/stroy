import { Shield } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { DocumentPermissionModal } from '~models/document'

import { PropsWithDocumentId, useIamAdmin } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentPermissionButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocumentId>) => {
	const iam = useIamAdmin()
	const [val, { toggle }] = useToggle(false)

	if (!iam) return null

	return (
		<>
			<DocumentPermissionModal
				document={document}
				open={val}
				onClose={toggle}
			/>

			<Action
				view={'action'}
				icon={Shield}
				onlyIcon={onlyIcon}
				onClick={toggle}
			>
				Права доступа
			</Action>
		</>
	)
}
