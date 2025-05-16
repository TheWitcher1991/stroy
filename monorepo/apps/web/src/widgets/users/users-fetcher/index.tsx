'use client'

import { useEffect } from 'react'

import { setCount, setError, setList, setLoading } from '~widgets/users'
import { useUsersStore } from '~widgets/users/users.hooks'

import { useUsers } from '@stroy/models'

export default function UsersFetcher() {
	const { filter } = useUsersStore()

	const { data, isLoading, isError } = useUsers(filter)

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
