import {
	Toaster as ToasterClass,
	ToasterComponent,
	ToasterProvider,
} from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

const toaster = new ToasterClass()

export default function WithToaster({ children }: PropsWithChildren) {
	return (
		<ToasterProvider toaster={toaster}>
			{children}
			<Toaster
				position={'bottom-right'}
				reverseOrder={false}
				containerStyle={{
					fontFamily: 'var(--g-font-family-sans)',
				}}
				toastOptions={{
					style: {
						background: 'var(--g-color-base-float)',
						color: 'var(--g-color-text-primary)',
					},
				}}
			/>
			<ToasterComponent />
		</ToasterProvider>
	)
}
