import { ArrowDownToSquare } from '@gravity-ui/icons'
import { useCallback } from 'react'

import { PropsWithDocument } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentDownloadButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocument>) => {
	const click = useCallback(() => {
		window.open(document.file, '_blank')
	}, [document.file])

	return (
		<Action
			view={'outlined'}
			onlyIcon={onlyIcon}
			icon={ArrowDownToSquare}
			onClick={click}
		>
			Скачать
		</Action>
	)
}
