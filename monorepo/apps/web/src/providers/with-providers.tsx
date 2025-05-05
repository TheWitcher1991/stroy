'use client'

import { ThemeProvider } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

import WithProgressBar from '~providers/with-progress-bar'
import WithStore from '~providers/with-store'
import WithToaster from '~providers/with-toaster'

import { useTheme } from '@stroy/hooks'

export const WithProviders = ({ children }: PropsWithChildren) => {
	const { theme } = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<WithStore>
				<WithProgressBar>
					<WithToaster>{children}</WithToaster>
				</WithProgressBar>
			</WithStore>
		</ThemeProvider>
	)
}
