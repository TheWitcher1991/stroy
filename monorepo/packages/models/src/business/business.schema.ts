import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

import { PayerType, PaymentMethod } from './business.utils'

export const DepositSchema = z.object({
	payment_method: z.nativeEnum(PaymentMethod),
	payer_type: z.enum(PayerType),
	amount: zShape.decimal,
})

export const WalletSchema = z.object({
	id: zShape.id,
	balance: zShape.decimal,
})

export const SubscriptionSchema = z.object({
	id: zShape.id,
	start_date: zShape.date,
	end_date: zShape.date,
	is_active: z.boolean(),
	auto_pay: z.boolean(),
})
