import { ArrowDownToSquare } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

import { PropsWithDocument } from '@stroy/models'

export const DocumentDownloadButton = ({ document }: PropsWithDocument) => {
	return (
		<Button view={'outlined'}>
			<Icon data={ArrowDownToSquare} size={16} />
			Скачать
		</Button>
	)
}
