'use client'

import { useMount } from 'ahooks'

import Journal, {
	JournalFetcher,
	JournalFilter,
	JournalPagination,
} from '~widgets/journal'
import { setBreadcrumbs } from '~widgets/nav'

import { Group, PageTitle } from '~packages/ui'

export default function JournalPage() {
	useMount(() => {
		setBreadcrumbs([{ text: 'Журнал действий', href: '/' }])
	})

	return (
		<Group>
			<PageTitle
				title={'Журнал действий'}
				subtitle={
					'Запись действий всех пользователей в этом рабочем пространстве'
				}
			/>
			<JournalFilter />
			<Journal />
			<JournalFetcher />
			<JournalPagination />
		</Group>
	)
}
