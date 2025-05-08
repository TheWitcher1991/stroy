import { ArrowDownToSquare } from '@gravity-ui/icons'
import { useCallback } from 'react'

import { Action } from '~packages/ui'

export const DocumentDownloadButton = ({
	file,
	onlyIcon,
}: PropsWithAction<{ file: string }>) => {
	const click = useCallback(() => {
		window.open(file, '_blank')
	}, [file])

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
