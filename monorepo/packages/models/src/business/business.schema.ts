import { zDepartmentId } from '../department'
import { z } from 'zod'

import { zBrand, zShape } from '@stroy/toolkit'

import { InvoiceTarget, PayerType, PaymentMethod } from './business.utils'

export const zWalletId = zBrand(zShape.id, 'WalletID')

export const zSubscriptionId = zBrand(zShape.id, 'SubscriptionID')

export const zPaymentId = zBrand(zShape.id, 'PaymentID')

export const DepositSchema = z.object({
	department: zDepartmentId,
	payment_method: z.nativeEnum(PaymentMethod),
	payer_type: z.nativeEnum(PayerType),
	target: z.nativeEnum(InvoiceTarget),
	amount: zShape.decimal,
})

export const WalletSchema = z.object({
	id: zWalletId,
	balance: zShape.decimal,
})

export const SubscriptionSchema = z.object({
	id: zSubscriptionId,
	start_date: zShape.date,
	end_date: zShape.date,
	is_active: z.boolean(),
	auto_pay: z.boolean(),
})

export const PaymentSchema = z.object({
	id: zPaymentId,
	payment_id: z.string(),
	payment_url: z.string(),
	payment_method: z.nativeEnum(PaymentMethod),
	payer_type: z.nativeEnum(PayerType),
	target: z.nativeEnum(InvoiceTarget),
	description: z.string(),
	amount_in_words: z.string(),
	amount: zShape.decimal,
	is_paid: z.boolean(),
	is_expired: z.boolean(),
	expires_at: zShape.datetime,
	captured_at: zShape.datetime.nullable(),
	created_at: zShape.datetime,
	updated_at: zShape.datetime,
})
