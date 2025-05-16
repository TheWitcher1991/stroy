import { TextInput } from '@gravity-ui/uikit'

import { changeQueryFromInput } from '~widgets/tags'
import { useUsersStore } from '~widgets/users'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function UsersSearch() {
	const { loading } = useUsersStore()

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
