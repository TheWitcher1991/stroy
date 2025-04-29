import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { logout, useAccountStore } from '~models/auth/auth.store'

import href from '~packages/href'

export const useCheckAuth = () => {
	const token = useAccountStore(
		useShallow(state => state.account?.access_token),
	)

	return !!token
}

export const useSessionExpired = () => {
	const router = useRouter()
	const pathname = usePathname()
	const session_expires = useAccountStore(
		state => state.account?.session_expires,
	)

	useEffect(() => {
		if (session_expires) {
			const expiresAt = session_expires * 1000
			const now = Date.now()
			const timeLeft = expiresAt - now

			if (timeLeft <= 0) {
				logout()
				router.replace(href.login)
				return
			}
		}
	}, [pathname, session_expires, logout])
}
