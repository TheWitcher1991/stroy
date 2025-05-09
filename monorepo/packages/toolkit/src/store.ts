import { useEffect, useState } from 'react'

type PersistedStore = {
	persist: {
		hasHydrated: () => boolean
		onFinishHydration: (callback: () => void) => () => void
	}
}

export const usePersistHydrated = (store: any) => {
	const [hydrated, setHydrated] = useState(false)

	useEffect(() => {
		if (store.persist.hasHydrated()) {
			setHydrated(true)
		} else {
			const unsub = store.persist.onFinishHydration(() => {
				setHydrated(true)
			})
			return unsub
		}
	}, [store])

	return hydrated
}
