'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren } from 'react'

export default function WithProgressBar({ children }: PropsWithChildren) {
	return (
		<>
			<ProgressBar
				height='3px'
				color='var(--g-color-base-brand)'
				options={{ showSpinner: false }}
			/>
			{children}
		</>
	)
}
