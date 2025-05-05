import { PencilToSquare } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

import { PropsWithDocument } from '@stroy/models'

export const DocumentEditButton = ({ document }: PropsWithDocument) => {
	return (
		<Button view={'outlined'}>
			<Icon data={PencilToSquare} size={16} />
			Изменить
		</Button>
	)
}
