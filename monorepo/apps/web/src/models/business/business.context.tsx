'use client'

import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react'

import { ISubscription, useCheckAuth, useSubscription } from '@stroy/models'
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

	const isAuth = useCheckAuth()

	const { isLoading, isError, subscription } = useSubscription(isAuth)

	useEffect(() => {
		setBusiness({
			isLoading,
			isError,
			subscription,
		})
	}, [isLoading, isError, subscription])

	if (!business) return null

	return <BusinessContext value={business}>{children}</BusinessContext>
}

export const useBusiness = () => useContext(BusinessContext)
