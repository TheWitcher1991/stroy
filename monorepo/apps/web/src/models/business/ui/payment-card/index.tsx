import { Bell, CircleCheck, Hashtag } from '@gravity-ui/icons'
import { Card, Flex, Icon, IconData, Label, Text } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import {
	PaymentCancelButton,
	PaymentModal,
	PaymentPayButton,
} from '~models/business'

import {
	PaymentMethodMapper,
	paymentStatusText,
	PropsWithPayment,
} from '@stroy/models'
import { RUBLE } from '@stroy/system'
import { formatDateTimeInRu } from '@stroy/toolkit'

import styles from './index.module.scss'

const iconColor: Record<boolean, string> = {
	true: '#009973',
	false: '#f6743e',
}

const iconData: Record<boolean, IconData> = {
	true: CircleCheck,
	false: Bell,
}

export function PaymentCard({ payment }: PropsWithPayment) {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<PaymentModal payment={payment} open={val} onClose={toggle} />

			<Card className={styles.paymentCard} onClick={toggle}>
				<Flex justifyContent={'space-between'}>
					<div className={styles.paymentContent}>
						<span
							style={{ background: iconColor[payment.is_paid] }}
							className={styles.paymentIcon}
						>
							<Icon data={iconData[payment.is_paid]} size={20} />
						</span>
						<Flex direction={'column'} gap={1}>
							<Flex alignItems={'center'} gap={1}>
								<Icon data={Hashtag} size={16} />{' '}
								<Text variant={'body-2'}>
									{payment.id} от{' '}
									{formatDateTimeInRu(payment.created_at)}
								</Text>
							</Flex>
							<Text>
								{paymentStatusText(payment)}{' '}
								{payment.is_paid
									? formatDateTimeInRu(
											payment.captured_at as string,
										)
									: `до ${formatDateTimeInRu(payment.expires_at)}`}
							</Text>
						</Flex>
					</div>
					<Label size={'s'} theme={'unknown'}>
						{PaymentMethodMapper[payment.payment_method]}
					</Label>
					<Text variant={'body-1'}>
						{payment.amount} {RUBLE}
					</Text>
				</Flex>
				<Text variant={'body-1'} className={styles.paymentDescription}>
					{payment.description}
				</Text>
				{!payment.is_paid && (
					<div className={styles.paymentActions}>
						<PaymentPayButton payment={payment} />
						<PaymentCancelButton payment={payment.id} />
					</div>
				)}
			</Card>
		</>
	)
}
