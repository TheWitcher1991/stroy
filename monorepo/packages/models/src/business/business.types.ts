import { z } from 'zod'

import {
	DepositSchema,
	SubscriptionSchema,
	WalletSchema,
} from './business.schema'

export type IDeposit = z.infer<typeof DepositSchema>

export type IWallet = z.infer<typeof WalletSchema>

export type ISubscription = z.infer<typeof SubscriptionSchema>

export type PaymentConfirmResponse = {
	confirmation_url: string
}
