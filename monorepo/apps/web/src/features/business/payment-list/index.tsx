'use client'

import { useDeferredValue } from 'react'

import { PaymentCard } from '~models/business'

import { IPayment } from '@stroy/models'

interface PaymentListProps {
	payments: IPayment[]
}

export default function PaymentList({ payments }: PaymentListProps) {
	const list = useDeferredValue(payments)

	return list.map(payment => (
		<PaymentCard key={payment.id} payment={payment} />
	))
}
