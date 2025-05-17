import type {
	ButtonSize,
	ButtonView,
	ButtonWidth,
	DropdownMenuItem,
} from '@gravity-ui/uikit'
import type { Store } from 'effector'
import type React, { JSXElementConstructor } from 'react'

declare module '*.css'
declare module '*.scss'
declare module '*.sass'

declare global {
	type ImageData =
		| import('next/dist/shared/lib/get-img-props').StaticImport
		| string

	type PropsWithAction<P = unknown> = P & {
		view?: ButtonView
		size?: ButtonSize
		width?: ButtonWidth
		onlyIcon?: boolean
	}

	type EStore<T> = Store<T | null>

	type DropdownItem<T = any> = (DropdownMenuItem<T> | DropdownMenuItem<T>[])[]

	interface ReactElement<
		P = any,
		T extends string | JSXElementConstructor<any> =
			| string
			| JSXElementConstructor<any>,
	> {
		type: T
		props: P
		key: string | null
	}

	namespace JSX {
		interface Element extends React.ReactElement<any, any> {}
	}
}

export {}
