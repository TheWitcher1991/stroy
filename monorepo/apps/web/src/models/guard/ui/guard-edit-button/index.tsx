import { PencilToSquare } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { GuardEditModal } from '~models/guard'

import { PropsWithGuard } from '@stroy/models'

import { Action } from '~packages/ui'

export const GuardEditButton = ({
	guard,
	onlyIcon,
}: PropsWithAction<PropsWithGuard>) => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<GuardEditModal guard={guard} open={val} onClose={toggle} />

			<Action icon={PencilToSquare} onlyIcon={onlyIcon} onClick={toggle}>
				Изменить
			</Action>
		</>
	)
}
