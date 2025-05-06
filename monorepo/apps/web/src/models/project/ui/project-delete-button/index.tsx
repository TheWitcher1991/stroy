import { TrashBin } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithProjectId, useDeleteProject } from '@stroy/models'

import { Action } from '~packages/ui'

export const ProjectDeleteButton = ({
	user,
	onlyIcon,
}: PropsWithAction<PropsWithProjectId>) => {
	const router = useRouter()
	const req = useDeleteProject()

	const handleClick = async () => {
		await req.mutateAsync(user)
		router.replace(href.projects.index)
		toast.success('Проект удален')
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
