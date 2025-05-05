import { TrashBin } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { href } from '@stroy/href'
import { PropsWithDocumentId, useDeleteDocument } from '@stroy/models'

export const DocumentDeleteButton = ({ document }: PropsWithDocumentId) => {
	const router = useRouter()
	const req = useDeleteDocument()

	const handleClick = async () => {
		await req.mutateAsync(document)
		router.replace(href.documents.index)
		toast.success('Документ удален')
	}

	return (
		<Button
			view={'outlined-danger'}
			loading={req.isPending}
			onClick={handleClick}
		>
			<Icon data={TrashBin} size={16} />
			Удалить
		</Button>
	)
}
