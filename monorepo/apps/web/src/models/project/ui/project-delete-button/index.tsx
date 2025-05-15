import { TrashBin } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithProject, useDeleteProject } from '@stroy/models'

import { Action, Dialog } from '~packages/ui'

export const ProjectDeleteButton = ({
	project,
	onlyIcon,
}: PropsWithAction<PropsWithProject>) => {
	const router = useRouter()
	const req = useDeleteProject()
	const [val, { toggle }] = useToggle(false)

	const handleClick = async () => {
		await req.mutateAsync(project.id)
		router.replace(href.projects.index)
		toast.success('Проект удален')
	}

	return (
		<>
			<Dialog
				onClose={toggle}
				open={val}
				loading={req.isPending}
				caption={'Удалить проект'}
				textButtonApply={'Удалить'}
				onClickButtonApply={handleClick}
			>
				Вы действительно хотите удалить проект {project.title}?
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
