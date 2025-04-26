'use client'

import { ThemeProvider } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

import WithProgressBar from '~providers/with-progress-bar'
import WithStore from '~providers/with-store'
import WithToaster from '~providers/with-toaster'

export const WithProviders = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider theme={'dark'}>
			<WithStore>
				<WithProgressBar>
					<WithToaster>{children}</WithToaster>
				</WithProgressBar>
			</WithStore>
		</ThemeProvider>
	)
}
