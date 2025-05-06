import { PencilToSquare } from '@gravity-ui/icons'

import { PropsWithDocument } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentEditButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocument>) => {
	return (
		<Action icon={PencilToSquare} onlyIcon={onlyIcon}>
			Изменить
		</Action>
	)
}
