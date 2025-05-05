import { Archive } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

import { PropsWithDocumentId } from '@stroy/models'

export const DocumentDraftButton = ({ document }: PropsWithDocumentId) => {
	return (
		<Button view={'outlined-info'} selected={true}>
			<Icon data={Archive} size={16} /> В черновики
		</Button>
	)
}
