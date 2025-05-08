import { PencilToSquare } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { DocumentEditModal } from '~models/document'

import { PropsWithDocument } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentEditButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocument>) => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<DocumentEditModal
				document={document}
				open={val}
				onClose={toggle}
			/>

			<Action icon={PencilToSquare} onlyIcon={onlyIcon} onClick={toggle}>
				Изменить
			</Action>
		</>
	)
}
