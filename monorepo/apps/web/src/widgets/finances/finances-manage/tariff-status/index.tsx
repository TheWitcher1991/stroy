import { ClockArrowRotateLeft, CreditCard } from '@gravity-ui/icons'
import { Button, Card, Flex, Icon, Label, Text } from '@gravity-ui/uikit'

import { STROY_PLUS } from '@stroy/system'

import { Actions, Spacing } from '~packages/ui'

import styles from './index.module.scss'

export default function TariffStatus() {
	return (
		<Card
			className={styles.tariffStatus}
			view={'filled'}
			width={'fit-content'}
		>
			<Flex alignItems={'center'} justifyContent={'space-between'}>
				<Text color={'secondary'}>Подписка</Text>
				<Label>Не активна</Label>
			</Flex>
			<Text variant={'header-2'}>{STROY_PLUS}</Text>
			<Text color={'secondary'} variant={'body-2'}>
				Активируйте
			</Text>
			<Spacing v={'xs'} />
			<Actions>
				<Button width={'max'} view={'outlined'}>
					<Icon data={CreditCard} size={16} />
					Оплатить сейчас
				</Button>
				<Button width={'max'} view={'outlined'}>
					<Icon data={ClockArrowRotateLeft} size={16} />
					История
				</Button>
			</Actions>
		</Card>
	)
}
