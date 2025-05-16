import { TextInput } from '@gravity-ui/uikit'

import { changeQueryFromInput, useTagsStore } from '~widgets/tags'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function TagsSearch() {
	const { loading } = useTagsStore()

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
