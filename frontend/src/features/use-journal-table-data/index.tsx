import { useMemo } from 'react'

import { IJournal, JournalActionMapper } from '~models/journal'
import { UserCell } from '~models/user'

import { formatDateInRu } from '~packages/utils'

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
