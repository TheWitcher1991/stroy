import { PencilToSquare } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { DocumentEditModal } from '~models/document'

import { GuardOperation, hasPermission, PropsWithDocument } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentEditButton = ({
	document,
	onlyIcon,
	width,
}: PropsWithAction<PropsWithDocument>) => {
	const [val, { toggle }] = useToggle(false)

	if (!hasPermission(document.permissions, GuardOperation.UPDATE)) return null

	return (
		<>
			<DocumentEditModal
				document={document}
				open={val}
				onClose={toggle}
			/>

			<Action
				icon={PencilToSquare}
				onlyIcon={onlyIcon}
				onClick={toggle}
				width={width}
			>
				Изменить
			</Action>
		</>
	)
}
