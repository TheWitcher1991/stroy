import { TrashBin } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithUser, useDeleteUser, userFullName } from '@stroy/models'

import { Action, Dialog } from '~packages/ui'

export const UserDeleteButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithUser>) => {
	const router = useRouter()
	const req = useDeleteUser()
	const [val, { toggle }] = useToggle(false)

	const handleClick = async () => {
		await req.mutateAsync(user.id)
		router.replace(href.users.index)
		toast.success('Пользователь удален')
	}

	return (
		<>
			<Dialog
				onClose={toggle}
				open={val}
				loading={req.isPending}
				caption={'Удалить пользователя'}
				textButtonApply={'Удалить'}
				onClickButtonApply={handleClick}
			>
				Вы действительно хотите удалить пользователя{' '}
				{userFullName(user)}?
			</Dialog>

			<Action
				view={'outlined-danger'}
				loading={req.isPending}
				onClick={toggle}
				icon={TrashBin}
				onlyIcon={onlyIcon}
			>
				Удалить
			</Action>
		</>
	)
}
