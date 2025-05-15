import { TrashBin } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithTag, useDeleteTag, userFullName } from '@stroy/models'

import { Action, Dialog } from '~packages/ui'

export const TagDeleteButton = ({
	tag,
	onlyIcon,
}: PropsWithAction<PropsWithTag>) => {
	const router = useRouter()
	const req = useDeleteTag()
	const [val, { toggle }] = useToggle(false)

	const handleClick = async () => {
		await req.mutateAsync(tag.id)
		router.replace(href.tags.index)
		toast.success('Тег удален')
	}

	return (
		<>
			<Dialog
				onClose={toggle}
				open={val}
				loading={req.isPending}
				caption={'Удалить тег'}
				textButtonApply={'Удалить'}
				onClickButtonApply={handleClick}
			>
				Вы действительно хотите удалить тег {tag.title}?
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
