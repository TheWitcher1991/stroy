import { TextInput } from '@gravity-ui/uikit'

import { changeQueryFromInput, useJournalStore } from '~widgets/journal'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function JournalSearch() {
	const { loading } = useJournalStore()

	const setSearch = useDebounce(e => changeQueryFromInput(e))

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
