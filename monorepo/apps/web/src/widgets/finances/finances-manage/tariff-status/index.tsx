import { CreditCard } from '@gravity-ui/icons'
import { Button, Card, Flex, Icon, Label, Text } from '@gravity-ui/uikit'

import {
	SubscribeButton,
	SubscriptionHistoryButton,
	UnsubscribeButton,
	useBusiness,
} from '~models/business'

import { STROY_PLUS } from '@stroy/system'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions, Spacing } from '~packages/ui'

import styles from './index.module.scss'

export default function TariffStatus() {
	const { subscription } = useBusiness()

	return (
		<Card
			className={styles.tariffStatus}
			view={'filled'}
			width={'fit-content'}
		>
			<Flex alignItems={'center'} justifyContent={'space-between'}>
				<Text color={'secondary'}>Подписка</Text>
				<Label>
					{subscription?.is_active ? 'Активна' : 'Не активна'}
				</Label>
			</Flex>
			<Text variant={'header-2'}>{STROY_PLUS}</Text>
			<Text color={'secondary'} variant={'body-2'}>
				{subscription?.is_active
					? `до ${formatDateInRu(subscription?.end_date as string)}`
					: 'Активируйте'}
			</Text>
			<Spacing v={'xs'} />
			<Actions>
				{!subscription?.is_active ? (
					<SubscribeButton />
				) : (
					<UnsubscribeButton />
				)}
				<Button width={'max'} view={'outlined'}>
					<Icon data={CreditCard} size={16} />
					Оплатить сейчас
				</Button>
				<SubscriptionHistoryButton />
			</Actions>
		</Card>
	)
}
