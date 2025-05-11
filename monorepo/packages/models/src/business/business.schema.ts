import { z } from 'zod'

import { zShape } from '@stroy/toolkit'

import { PayerType, PaymentMethod } from './business.utils'

export const DepositSchema = z.object({
	payment_method: z.nativeEnum(PaymentMethod),
	payer_type: z.enum(PayerType),
	amount: zShape.decimal,
})
