import { ArrowDownToSquare } from '@gravity-ui/icons'

import { PropsWithDocument } from '@stroy/models'

import { Action } from '~packages/ui'

export const DocumentDownloadButton = ({
	document,
	onlyIcon,
}: PropsWithAction<PropsWithDocument>) => {
	return (
		<Action view={'outlined'} onlyIcon={onlyIcon} icon={ArrowDownToSquare}>
			Скачать
		</Action>
	)
}
