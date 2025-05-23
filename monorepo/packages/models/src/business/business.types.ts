import { z } from 'zod'

import { Branded, UseModelOptions } from '@stroy/types'

import {
	DepositSchema,
	PaymentSchema,
	SubscriptionSchema,
	WalletSchema,
} from './business.schema'

export type PaymentID = Branded<number, 'PaymentID'>

export type WalletID = Branded<number, 'WalletID'>

export type SubscriptionID = Branded<number, 'SubscriptionID'>

export type IPayment = z.infer<typeof PaymentSchema>

export type IDeposit = z.infer<typeof DepositSchema>

export type IWallet = z.infer<typeof WalletSchema>

export type ISubscription = z.infer<typeof SubscriptionSchema>

export type PaymentConfirmResponse = {
	confirmation_url: string
}

export type SubscribeResponse = {
	return_url: string
}

export interface UsePayments extends UseModelOptions {}

export interface PropsWithPayment {
	payment: IPayment
}

export interface PropsWithPaymentId {
	payment: PaymentID
}
