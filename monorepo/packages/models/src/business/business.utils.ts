import { EnumType, SelectOption } from '@stroy/types'

import { IPayment, PropsWithPayment } from './business.types'

export const PaymentMethod = {
	CARD: 'bank_card',
	SBERPAY: 'sberbank',
	TPAY: 'tinkoff_bank',
	SBP: 'sbp',
	YOO_MONEY: 'yoo_money',
} as const

export type PaymentMethod = EnumType<typeof PaymentMethod>

export const PaymentMethodMapper: Record<PaymentMethod, string> = {
	[PaymentMethod.CARD]: 'Банковская карта',
	[PaymentMethod.SBERPAY]: 'SberPay',
	[PaymentMethod.TPAY]: 'T‑Pay',
	[PaymentMethod.SBP]: 'СБП (Система быстрых платежей)',
	[PaymentMethod.YOO_MONEY]: 'ЮMoney',
}

export const PayerType = {
	INDIVIDUAL: 'INDIVIDUAL',
	LEGAL: 'LEGAL',
} as const

export type PayerType = EnumType<typeof PayerType>

export const InvoiceTarget = {
	WALLET: 'WALLET',
	PAYMENT: 'PAYMENT',
} as const

export type InvoiceTarget = EnumType<typeof InvoiceTarget>

export const PaymentMethodOptions: SelectOption<PaymentMethod>[] =
	Object.entries(PaymentMethodMapper).map(([value, label]) => ({
		value: value as PaymentMethod,
		content: label,
	}))

export const paymentStatusText = ({ is_paid, payer_type }: IPayment) => {
	if (is_paid) {
		return 'Оплачен'
	} else if (!is_paid && payer_type === PayerType.INDIVIDUAL) {
		return 'Не оплачен'
	} else if (!is_paid && payer_type === PayerType.LEGAL) {
		return 'Ждём зачисления'
	} else {
		return 'Не оплачен'
	}
}
