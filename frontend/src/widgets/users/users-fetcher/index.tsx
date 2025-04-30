'use client'

import { useEffect } from 'react'

import { usersActions, usersState } from '~widgets/users'

import { useUsers } from '~models/user'

export default function UsersFetcher() {
	const { setList, setCount, setLoading, setError } = usersActions
	const { data, isLoading, isError } = useUsers(usersState.filter)

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
