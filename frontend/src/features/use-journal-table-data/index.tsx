import { useMemo } from 'react'

import { IJournal } from '~models/journal'

export default function useJournalTableData(journal: IJournal[]) {
	return useMemo(() => journal.map(log => ({})), [journal])
}
