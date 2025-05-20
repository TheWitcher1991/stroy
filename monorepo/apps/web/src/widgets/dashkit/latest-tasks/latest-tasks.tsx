import { NotFound } from '@gravity-ui/illustrations'
import { Icon, PlaceholderContainer } from '@gravity-ui/uikit'

import { href } from '@stroy/href'

import { DashkitWidget } from '~packages/ui'

export default function LatestTasks() {
	return (
		<DashkitWidget title={'Задачи'} href={href.documents.index}>
			<PlaceholderContainer
				title='Нет открытых задач'
				size='m'
				align='center'
				image={<Icon data={NotFound} size={120} />}
			/>
		</DashkitWidget>
	)
}
