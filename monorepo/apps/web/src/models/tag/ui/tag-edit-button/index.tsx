import { PencilToSquare } from '@gravity-ui/icons'

import { PropsWithTag } from '@stroy/models'

import { Action } from '~packages/ui'

export const TagEditButton = ({
	tag,
	onlyIcon,
}: PropsWithAction<PropsWithTag>) => {
	return (
		<Action icon={PencilToSquare} onlyIcon={onlyIcon}>
			Изменить
		</Action>
	)
}
