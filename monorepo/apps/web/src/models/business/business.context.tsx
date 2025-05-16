'use client'

import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react'

import { ISubscription, useSubscription } from '@stroy/models'
import { Nullable } from '@stroy/types'

export interface BusinessContextValue {
	isLoading: boolean
	isError: boolean
	subscription: Nullable<ISubscription>
}

export const BusinessContext =
	createContext<Nullable<BusinessContextValue>>(null)

export function BusinessProvider({ children }: PropsWithChildren) {
	const [business, setBusiness] =
		useState<Nullable<BusinessContextValue>>(null)

	const { isLoading, isError, subscription } = useSubscription()

	useEffect(() => {
		setBusiness({
			isLoading,
			isError,
			subscription,
		})
	}, [isLoading, isError, subscription])

	return <BusinessContext value={business}>{children}</BusinessContext>
}

export const useBusiness = () => useContext(BusinessContext)
