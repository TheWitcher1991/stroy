import { Xmark } from '@gravity-ui/icons'
import { Button, Card, Flex, Icon, Link, Modal, Text } from '@gravity-ui/uikit'
import { memo, ReactNode } from 'react'

import { PaymentCancelButton, PaymentPayButton } from '~models/business'

import {
	PaymentMethodMapper,
	paymentStatusText,
	PropsWithPayment,
} from '@stroy/models'
import { RUBLE } from '@stroy/system'
import { formatDateTimeInRu } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Actions, Spacing } from '~packages/ui'

import styles from './index.module.scss'

const Detail = memo(
	({ title, caption }: { title: string; caption: ReactNode }) => (
		<div className={styles.paymentDetail}>
			<Text color={'secondary'}>{title}</Text>
			<p>{caption}</p>
		</div>
	),
)

export const PaymentModal = ({
	payment,
	open,
	onClose,
}: ModalProps<PropsWithPayment>) => {
	return (
		<Modal open={open} onOpenChange={onClose}>
			<Card className={styles.paymentModal} view={'clear'}>
				<Flex alignItems={'center'} justifyContent={'space-between'}>
					<Text variant={'subheader-3'}>Детали платежа</Text>
					<Button view={'flat'} onClick={onClose} size={'l'}>
						<Icon data={Xmark} size={20} />
					</Button>
				</Flex>
				<Spacing />
				<Detail title={'Идентификатор'} caption={payment.id} />
				<Detail
					title={'Сумма'}
					caption={
						<>
							{payment.amount} ({payment.amount_in_words}) {RUBLE}
						</>
					}
				/>
				<Detail
					title={'Дата'}
					caption={formatDateTimeInRu(payment.created_at)}
				/>
				<Detail
					title={'Статус счета'}
					caption={paymentStatusText(payment)}
				/>
				<Detail
					title={'Описание счета'}
					caption={payment.description}
				/>
				<Detail
					title={'Способ платежа'}
					caption={PaymentMethodMapper[payment.payment_method]}
				/>
				<Detail
					title={'Страница оплаты'}
					caption={
						<Link href={payment.payment_url}>
							{payment.payment_url}
						</Link>
					}
				/>
				<Detail title={'Статус счета'} caption={payment.amount} />
				{!payment.is_paid && (
					<Actions>
						<PaymentPayButton payment={payment} />
						<PaymentCancelButton payment={payment.id} />
					</Actions>
				)}
			</Card>
		</Modal>
	)
}
