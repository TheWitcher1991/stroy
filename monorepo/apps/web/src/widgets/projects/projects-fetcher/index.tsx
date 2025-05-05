'use client'

import { useEffect } from 'react'

import { projectsActions, projectsState } from '~widgets/projects'

import { useProjects } from '@stroy/models'

export default function ProjectsFetcher() {
	const { setList, setCount, setLoading, setError } = projectsActions
	const { data, isLoading, isError } = useProjects(projectsState.filter)

	useEffect(() => {
		setLoading(isLoading)
		setError(isError)
		if (!isLoading && data?.data) {
			setCount(data.data.count)
			setList(data.data.results)
		}
	}, [data, isLoading, isError])

	return null
}
