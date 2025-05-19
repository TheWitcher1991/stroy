'use client'

import { UserRole, useUpdateUser, useUser } from '../user'
import { useUnit } from 'effector-react'
import { useEffect, useMemo } from 'react'

import { href } from '@stroy/href'

import { $account, logout } from './auth.store'

export const useIam = () => useUnit($account)

export const useCheckAuth = (): boolean => Boolean(useIam().access_token)

export const useIsIam = (user: number): boolean => {
	const id = useIam().user
	return useMemo(() => id === user, [id, user])
}

export const useIamAdmin = (): boolean => {
	const role = useIam().role
	return useMemo(() => role === UserRole.ADMIN, [role])
}

export const useSessionExpired = () => {
	const { session_expires, user } = useIam()

	useEffect(() => {
		if (!user || !session_expires) {
			logout()
			window.location.replace(href.login)
			return
		}

		const expiresAt = session_expires * 1000
		const now = Date.now()
		const timeLeft = expiresAt - now

		if (timeLeft <= 0) {
			logout()
			window.location.replace(href.login)
		}
	}, [user, session_expires])
}

export const useProfile = () => {
	const account = useIam()
	return useUser(account?.user)
}

export const useUpdateProfile = () => {
	const account = useIam()
	return useUpdateUser(account?.user)
}
