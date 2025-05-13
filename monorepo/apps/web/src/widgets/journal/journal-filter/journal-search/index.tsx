import { TextInput } from '@gravity-ui/uikit'

import { journalActions, useJournalStore } from '~widgets/journal'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function JournalSearch() {
	const { loading } = useJournalStore()

	const setSearch = useDebounce((e: any) => {
		journalActions.setFilter({
			query: e.target.value,
		})
	})

	return (
		<TextInput
			disabled={loading}
			size={'m'}
			placeholder='Поиск...'
			startContent={<SearchIcon />}
			onChange={setSearch}
		/>
	)
}
