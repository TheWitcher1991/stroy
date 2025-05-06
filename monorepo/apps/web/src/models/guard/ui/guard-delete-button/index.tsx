import { TrashBin } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithGuardId, useDeleteGuard } from '@stroy/models'

import { Action } from '~packages/ui'

export const GuardDeleteButton = ({
	guard,
	onlyIcon,
}: PropsWithAction<PropsWithGuardId>) => {
	const router = useRouter()
	const req = useDeleteGuard()

	const handleClick = async () => {
		await req.mutateAsync(guard)
		router.replace(href.guards.index)
		toast.success('Гуард удален')
	}

	return (
		<Action
			view={'outlined-danger'}
			loading={req.isPending}
			onClick={handleClick}
			icon={TrashBin}
			onlyIcon={onlyIcon}
		>
			Удалить
		</Action>
	)
}
