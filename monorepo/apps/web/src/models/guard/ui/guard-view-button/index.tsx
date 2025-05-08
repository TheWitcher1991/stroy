import { Eye } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'

import { PropsWithGuard } from '@stroy/models'

import { Action } from '~packages/ui'

export const GuardViewButton = ({
	guard,
	onlyIcon,
}: PropsWithAction<PropsWithGuard>) => {
	const router = useRouter()

	return (
		<Action view={'outlined'} icon={Eye} onlyIcon={onlyIcon}>
			Открыть
		</Action>
	)
}
