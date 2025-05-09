'use client'

import { UserRole, useUpdateUser, useUser } from '../user'
import { useEffect, useMemo } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { href } from '@stroy/href'
import { usePersistHydrated } from '@stroy/toolkit'

import { useAccountStore } from './auth.store'
import { IAccount } from './auth.types'

export const useCheckAuth = (): boolean => {
	const token = useAccountStore(
		useShallow(state => state.account?.access_token),
	)

	return !!token
}

export const useIam = (): IAccount => {
	return useAccountStore(state => state.account)
}

export const useIsIam = (user: number): boolean => {
	const id = useAccountStore(useShallow(state => state.account?.user))

	return useMemo(() => id === user, [user])
}

export const useIamAdmin = (): boolean => {
	const role = useAccountStore(useShallow(state => state.account?.role))

	return useMemo(() => role === UserRole.ADMIN, [role])
}

export const useSessionExpired = () => {
	const hydrated = usePersistHydrated(useAccountStore)

	const session_expires = useAccountStore(
		state => state.account?.session_expires,
	)
	const user = useAccountStore(state => state.account?.user)

	const logout = useAccountStore(state => state.logout)

	useEffect(() => {
		if (!hydrated) return

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
	}, [hydrated, user, session_expires, logout])
}

export const useProfile = () => {
	const account = useIam()

	return useUser(account?.user)
}

export const useUpdateProfile = () => {
	const account = useIam()

	return useUpdateUser(account?.user)
}
