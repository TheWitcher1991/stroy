import { TrashBin } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import {
	GuardOperation,
	hasPermission,
	PropsWithDocument,
	useDeleteDocument,
} from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentDeleteButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocument>) => {
	const router = useRouter()
	const req = useDeleteDocument()

	const handleClick = async () => {
		await req.mutateAsync(document.id)
		router.replace(href.documents.index)
		toast.success('Документ удален')
	}

	if (!hasPermission(document.permissions, GuardOperation.DELETE)) return null

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
