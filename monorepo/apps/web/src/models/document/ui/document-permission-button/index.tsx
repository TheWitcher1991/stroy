import { Shield } from '@gravity-ui/icons'

import { PropsWithDocumentId, useIamAdmin } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentPermissionButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocumentId>) => {
	const iam = useIamAdmin()

	if (!iam) return null

	return (
		<Action view={'action'} icon={Shield} onlyIcon={onlyIcon}>
			Права доступа
		</Action>
	)
}
