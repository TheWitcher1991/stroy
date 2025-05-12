import { CreditCard } from '@gravity-ui/icons'
import { useCallback } from 'react'

import { PropsWithPayment } from '@stroy/models'

import { Action } from '~packages/ui'

export const PaymentPayButton = ({
	payment,
	onlyIcon,
}: PropsWithAction<PropsWithPayment>) => {
	const onClick = useCallback(
		e => {
			e.stopPropagation()
			window.location.href = payment.payment_url
		},
		[payment.payment_url],
	)

	return (
		<Action
			view={'action'}
			icon={CreditCard}
			onlyIcon={onlyIcon}
			onClick={onClick}
			disabled={payment.is_expired}
		>
			Оплатить
		</Action>
	)
}
