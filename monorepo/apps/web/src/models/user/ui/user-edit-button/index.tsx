import { PencilToSquare } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { UserEditModal } from '~models/user'

import { PropsWithUser } from '@stroy/models'

import { Action } from '~packages/ui'

export const UserEditButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithUser>) => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<UserEditModal user={user} open={val} onClose={toggle} />

			<Action icon={PencilToSquare} onlyIcon={onlyIcon} onClick={toggle}>
				Изменить
			</Action>
		</>
	)
}
