import { Eye } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import { href } from '@stroy/href'
import { PropsWithUserId } from '@stroy/models'

import { Action } from '~packages/ui'

export const UserViewButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithUserId>) => {
	const router = useRouter()

	const onClick = useCallback(
		() => router.replace(href.users.byId(user)),
		[user, router],
	)

	return (
		<Action
			view={'outlined'}
			onClick={onClick}
			icon={Eye}
			onlyIcon={onlyIcon}
		>
			Открыть
		</Action>
	)
}
