import { PencilToSquare } from '@gravity-ui/icons'

import { PropsWithProject } from '@stroy/models'

import { Action } from '~packages/ui'

export const ProjectEditButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithProject>) => {
	return (
		<Action icon={PencilToSquare} onlyIcon={onlyIcon}>
			Изменить
		</Action>
	)
}
