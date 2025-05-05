'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren } from 'react'

import { IS_DEV } from '@stroy/system'
import { queryClient } from '@stroy/toolkit'

export default function WithStore({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<>{children}</>
			{IS_DEV && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	)
}
