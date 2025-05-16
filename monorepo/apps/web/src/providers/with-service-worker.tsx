'use client'

import { PropsWithChildren, useEffect } from 'react'

export default function WithServiceWorker({ children }: PropsWithChildren) {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			registerServiceWorker()
		}
	}, [])

	async function registerServiceWorker() {
		await navigator.serviceWorker.register('/sw.js', {
			scope: '/',
			updateViaCache: 'none',
		})
	}

	return children
}
