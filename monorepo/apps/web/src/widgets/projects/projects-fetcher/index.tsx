'use client'

import { useEffect } from 'react'

import { setCount, setError, setList, setLoading } from '~widgets/projects'
import { useProjectsStore } from '~widgets/projects/projects.hooks'

import { useProjects } from '@stroy/models'

export default function ProjectsFetcher() {
	const { filter } = useProjectsStore()

	const { data, isLoading, isError } = useProjects(filter)

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
