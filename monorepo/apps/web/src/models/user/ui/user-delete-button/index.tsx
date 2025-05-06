import { TrashBin } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithUserId, useDeleteUser } from '@stroy/models'

import { Action } from '~packages/ui'

export const UserDeleteButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithUserId>) => {
	const router = useRouter()
	const req = useDeleteUser()

	const handleClick = async () => {
		await req.mutateAsync(user)
		router.replace(href.users.index)
		toast.success('Пользователь удален')
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
