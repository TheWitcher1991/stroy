import { PencilToSquare } from '@gravity-ui/icons'

import { PropsWithUser } from '@stroy/models'

import { Action } from '~packages/ui'

export const UserEditButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithUser>) => {
	return (
		<Action icon={PencilToSquare} onlyIcon={onlyIcon}>
			Изменить
		</Action>
	)
}
