import { Metadata } from 'next'
import { ReactNode } from 'react'
import WithProviders from '~providers'

import '@gravity-ui/uikit/styles/fonts.css'

import './ globals.scss'

export const metadata: Metadata = {
	title: '',
	description: '',
	robots: 'index, follow',
	openGraph: {
		title: '',
		description: '',
		type: 'website',
	},
	twitter: {
		title: '',
		description: '',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body>
				<WithProviders>{children}</WithProviders>
			</body>
		</html>
	)
}
