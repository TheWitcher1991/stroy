'use client'

import Journal, { JournalFetcher, JournalPagination } from '~widgets/journal'

import { Group, PageTitle } from '~packages/ui'

export default function JournalPage() {
	return (
		<Group>
			<PageTitle
				title={'Журнал действий'}
				subtitle={
					'Запись действий всех пользователей в этом рабочем пространстве'
				}
			/>
			<Journal />
			<JournalFetcher />
			<JournalPagination />
		</Group>
	)
}
