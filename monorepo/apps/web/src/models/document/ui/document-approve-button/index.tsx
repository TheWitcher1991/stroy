import { CopyCheck } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

import { PropsWithDocumentId } from '@stroy/models'

export const DocumentApproveButton = ({ document }: PropsWithDocumentId) => {
	return (
		<Button view={'action'}>
			<Icon data={CopyCheck} size={16} />
			Утвердить
		</Button>
	)
}
