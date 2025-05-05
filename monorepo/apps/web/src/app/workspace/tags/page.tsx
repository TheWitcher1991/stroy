'use client'

import Tags, { TagsFetcher } from '~widgets/tags'

import { Group, PageTitle } from '~packages/ui'

export default function TagsPage() {
	return (
		<Group>
			<PageTitle
				buttonTitle={'Создать тег'}
				title={'Теги'}
				subtitle={
					'Теги используются для категоризации документов. Вы можете добавлять теги к документам, чтобы облегчить их поиск и упорядочивание'
				}
			/>
			<Tags />
			<TagsFetcher />
		</Group>
	)
}
