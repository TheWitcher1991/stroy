import { Label } from '@gravity-ui/uikit'
import { useMemo } from 'react'

import { DocumentCell } from '~models/document'
import { UserCell } from '~models/user'

import { IJournal, JournalActionMapper } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function useJournalTableData(journal: IJournal[]) {
	return useMemo(
		() =>
			journal.map(log => ({
				user: <UserCell user={log.user} />,
				action: (
					<Label size={'m'}>{JournalActionMapper[log.action]}</Label>
				),
				document: log.document ? (
					<DocumentCell document={log.document} />
				) : (
					log.details
				),
				created: formatDateInRu(log.created_at),
			})),
		[journal],
	)
}
