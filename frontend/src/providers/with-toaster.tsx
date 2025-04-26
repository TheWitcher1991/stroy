import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export default function WithToaster({ children }: PropsWithChildren) {
	return (
		<>
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
		</>
	)
}
