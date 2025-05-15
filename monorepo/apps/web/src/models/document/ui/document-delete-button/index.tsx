import { TrashBin } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import {
	GuardOperation,
	hasPermission,
	PropsWithDocument,
	useDeleteDocument,
} from '@stroy/models'

import { Action, Dialog } from '~packages/ui'

export const DocumentDeleteButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocument>) => {
	const router = useRouter()
	const req = useDeleteDocument()
	const [val, { toggle }] = useToggle(false)

	const handleClick = async () => {
		await req.mutateAsync(document.id)
		router.replace(href.documents.index)
		toast.success('Документ удален')
	}

	if (!hasPermission(document.permissions, GuardOperation.DELETE)) return null

	return (
		<>
			<Dialog
				onClose={toggle}
				open={val}
				loading={req.isPending}
				caption={'Удалить документ'}
				textButtonApply={'Удалить'}
				onClickButtonApply={handleClick}
			>
				Вы действительно хотите удалить документ {document.title}?
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
