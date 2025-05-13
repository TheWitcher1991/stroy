import { TextInput } from '@gravity-ui/uikit'

import { projectsActions, useProjectsStore } from '~widgets/projects'

import { useDebounce } from '@stroy/hooks'

import { SearchIcon } from '~packages/ui'

export default function ProjectsSearch() {
	const { loading } = useProjectsStore()

	const setSearch = useDebounce((e: any) => {
		projectsActions.setFilter({
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
