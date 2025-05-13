import { TextInput } from '@gravity-ui/uikit'

import { guardsActions, useGuardsStore } from '~widgets/guards'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function GuardsSearch() {
	const { loading } = useGuardsStore()

	const setSearch = useDebounce((e: any) => {
		guardsActions.setFilter({
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
