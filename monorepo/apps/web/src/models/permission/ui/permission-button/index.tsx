import { Shield } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { PermissionModal } from '~models/permission'

import { PropsWithDocumentId, useIamAdmin } from '@stroy/models'

import { Action } from '~packages/ui'

export const PermissionButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocumentId>) => {
	const iam = useIamAdmin()
	const [val, { toggle }] = useToggle(false)

	if (!iam) return null

	return (
		<>
			<PermissionModal document={document} open={val} onClose={toggle} />

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
