import { NotFound } from '@gravity-ui/illustrations'
import { Icon, PlaceholderContainer } from '@gravity-ui/uikit'

import { href } from '@stroy/href'

import { DashkitWidget } from '~packages/ui'

export default function DocumentsApproval() {
	return (
		<DashkitWidget title={'На утверждение'} href={href.documents.index}>
			<PlaceholderContainer
				title='Нет документов на утверждение'
				size='m'
				align='center'
				image={<Icon data={NotFound} size={120} />}
			/>
		</DashkitWidget>
	)
}
