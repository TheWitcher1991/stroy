import { TextInput } from '@gravity-ui/uikit'

import { usersActions, useUsersStore } from '~widgets/users'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function UsersSearch() {
	const { loading } = useUsersStore()

	const setSearch = useDebounce((e: any) => {
		usersActions.setFilter({
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
