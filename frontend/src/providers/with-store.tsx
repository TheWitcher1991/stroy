'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '~store'

export default function WithStore({ children }: PropsWithChildren) {
	return <Provider store={store}>{children}</Provider>
}
