import { TrashBin } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithTagId, useDeleteTag } from '@stroy/models'

import { Action } from '~packages/ui'

export const TagDeleteButton = ({
	tag,
	onlyIcon,
}: PropsWithAction<PropsWithTagId>) => {
	const router = useRouter()
	const req = useDeleteTag()

	const handleClick = async () => {
		await req.mutateAsync(tag)
		router.replace(href.tags.index)
		toast.success('Тег удален')
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
