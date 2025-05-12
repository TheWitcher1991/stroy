'use client'

import { ThemeProvider } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

import WithProgressBar from '~providers/with-progress-bar'
import WithStore from '~providers/with-store'
import WithToaster from '~providers/with-toaster'

import { BusinessProvider } from '~models/business'

import { useTheme } from '@stroy/hooks'

export const WithProviders = ({ children }: PropsWithChildren) => {
	const { theme } = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<WithStore>
				<WithProgressBar>
					<WithToaster>
						<BusinessProvider>{children}</BusinessProvider>
					</WithToaster>
				</WithProgressBar>
			</WithStore>
		</ThemeProvider>
	)
}
