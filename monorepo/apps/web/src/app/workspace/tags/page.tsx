'use client'

import Tags, { TagsFetcher } from '~widgets/tags'

import { TagCreateButton } from '~models/tag'

import { Group, PageTitle } from '~packages/ui'

export default function TagsPage() {
	return (
		<Group>
			<PageTitle
				title={'Теги'}
				subtitle={
					'Теги используются для категоризации документов. Вы можете добавлять теги к документам, чтобы облегчить их поиск и упорядочивание'
				}
				action={<TagCreateButton />}
			/>
			<Tags />
			<TagsFetcher />
		</Group>
	)
}
