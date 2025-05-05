import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: true,
			refetchOnReconnect: true,
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
})

export const optimisticInvalidateQueries = async (
	queries: ReadonlyArray<unknown>[],
) => {
	if (queries.length === 0) return

	for (const val of queries) {
		await queryClient.invalidateQueries({
			queryKey: val,
		})
	}
}
