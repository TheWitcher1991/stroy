'use client'

import { useMount } from 'ahooks'

import { setBreadcrumbs } from '~widgets/nav'
import Tags, { TagsFetcher, TagsFilter } from '~widgets/tags'

import { TagCreateButton } from '~models/tag'

import { generateBreadcrumbs } from '@stroy/toolkit'

import { Group, PageTitle } from '~packages/ui'

export default function TagsPage() {
	useMount(() => {
		setBreadcrumbs(
			generateBreadcrumbs({
				resource: 'tags',
				variant: 'index',
			}),
		)
	})

	return (
		<Group>
			<PageTitle
				title={'Теги'}
				subtitle={
					'Теги используются для категоризации документов. Вы можете добавлять теги к документам, чтобы облегчить их поиск и упорядочивание'
				}
				action={<TagCreateButton />}
			/>
			<TagsFilter />
			<Tags />
			<TagsFetcher />
		</Group>
	)
}
