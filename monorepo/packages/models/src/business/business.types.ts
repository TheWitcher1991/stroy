import { z } from 'zod'

import { UseModelOptions } from '@stroy/types'

import {
	DepositSchema,
	PaymentSchema,
	SubscriptionSchema,
	WalletSchema,
} from './business.schema'

export type IPayment = z.infer<typeof PaymentSchema>

export type IDeposit = z.infer<typeof DepositSchema>

export type IWallet = z.infer<typeof WalletSchema>

export type ISubscription = z.infer<typeof SubscriptionSchema>

export type PaymentConfirmResponse = {
	confirmation_url: string
}

export interface UsePayments extends UseModelOptions {}
