'use client'

import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { href } from '@stroy/href/src'

import { logout, useAccountStore } from './auth.store'

export const useCheckAuth = () => {
	const token = useAccountStore(
		useShallow(state => state.account?.access_token),
	)

	return !!token
}

export const useSessionExpired = () => {
	const session_expires = useAccountStore(
		state => state.account?.session_expires,
	)

	useEffect(() => {
		const expiresAt = session_expires * 1000
		const now = Date.now()
		const timeLeft = expiresAt - now

		if (timeLeft <= 0) {
			logout()
			window.location.replace(href.login)
			return
		}
	}, [session_expires, logout])
}
