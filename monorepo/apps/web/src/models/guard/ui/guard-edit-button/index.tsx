import { PencilToSquare } from '@gravity-ui/icons'

import { PropsWithGuard } from '@stroy/models'

import { Action } from '~packages/ui'

export const GuardEditButton = ({
	guard,
	onlyIcon,
}: PropsWithAction<PropsWithGuard>) => {
	return (
		<Action icon={PencilToSquare} onlyIcon={onlyIcon}>
			Изменить
		</Action>
	)
}
