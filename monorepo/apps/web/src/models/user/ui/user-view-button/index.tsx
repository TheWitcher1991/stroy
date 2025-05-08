import { Eye } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'

import { href } from '@stroy/href'
import { PropsWithUserId } from '@stroy/models'

import { Action } from '~packages/ui'

export const UserViewButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithUserId>) => {
	const router = useRouter()

	const handleClick = () => router.push(href.users.byId(user))

	return (
		<Action
			view={'outlined'}
			onClick={handleClick}
			icon={Eye}
			onlyIcon={onlyIcon}
		>
			Открыть
		</Action>
	)
}
