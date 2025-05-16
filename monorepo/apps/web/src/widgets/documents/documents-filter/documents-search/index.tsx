import { TextInput } from '@gravity-ui/uikit'

import { changeQueryFromInput, useDocumentsStore } from '~widgets/documents'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function DocumentsSearch() {
	const { loading } = useDocumentsStore()

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
