import { TrashBin } from '@gravity-ui/icons'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithDocumentId, useDeleteDocument } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentDeleteButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocumentId>) => {
	const router = useRouter()
	const req = useDeleteDocument()

	const handleClick = async () => {
		await req.mutateAsync(document)
		router.replace(href.documents.index)
		toast.success('Документ удален')
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
