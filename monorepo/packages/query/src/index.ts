import {
	QueryObserver,
	QueryObserverOptions,
	QueryObserverResult,
} from '@tanstack/react-query'

import { queryClient } from '@stroy/toolkit'

export function query<TQueryFnData>(
	options: QueryObserverOptions<TQueryFnData>,
) {
	const observer = new QueryObserver<TQueryFnData>(queryClient, {
		...options,
		notifyOnChangeProps: ['all'],
	} as QueryObserverOptions<TQueryFnData>)

	const listeners = new Set<
		(result: QueryObserverResult<TQueryFnData>) => void
	>()

	const notify = (result: QueryObserverResult<TQueryFnData>) => {
		for (const listener of listeners) listener(result)
	}

	const subscription = observer.subscribe(notify)

	observer.refetch()

	return {
		get $result() {
			return observer.getCurrentResult().data
		},
		getCurrent: () => observer.getCurrentResult(),
		subscribe: (
			fn: (result: QueryObserverResult<TQueryFnData>) => void,
		) => {
			listeners.add(fn)
			fn(observer.getCurrentResult())
			return () => listeners.delete(fn)
		},
		refetch: () => observer.refetch(),
		destroy: () => {
			subscription()
			listeners.clear()
		},
	}
}
