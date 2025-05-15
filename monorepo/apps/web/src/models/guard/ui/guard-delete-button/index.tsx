import { TrashBin } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithGuard, useDeleteGuard } from '@stroy/models'

import { Action, Dialog } from '~packages/ui'

export const GuardDeleteButton = ({
	guard,
	onlyIcon,
}: PropsWithAction<PropsWithGuard>) => {
	const router = useRouter()
	const req = useDeleteGuard()
	const [val, { toggle }] = useToggle(false)

	const handleClick = async () => {
		await req.mutateAsync(guard.id)
		router.replace(href.guards.index)
		toast.success('Гуард удален')
	}

	return (
		<>
			<Dialog
				onClose={toggle}
				open={val}
				loading={req.isPending}
				caption={'Удалить гуард'}
				textButtonApply={'Удалить'}
				onClickButtonApply={handleClick}
			>
				Вы действительно хотите удалить гуард {guard.title}?
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
