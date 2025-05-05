import { useMemo } from 'react'

import { UserCell } from '~models/user'

import { IJournal, JournalActionMapper } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function useJournalTableData(journal: IJournal[]) {
	return useMemo(
		() =>
			journal.map(log => ({
				user: <UserCell user={log.user} />,
				action: JournalActionMapper[log.action],
				created: formatDateInRu(log.created_at),
				actions: <></>,
			})),
		[journal],
	)
}
