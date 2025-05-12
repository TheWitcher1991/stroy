import { CreditCard } from '@gravity-ui/icons'
import { Flex, Icon, Text } from '@gravity-ui/uikit'

import { useWallet } from '@stroy/models'

import styles from './wallet.module.scss'

export default function Wallet() {
	const { balance } = useWallet()

	return (
		<Flex alignItems={'center'} gap={3}>
			<span className={styles.walletIcon}>
				<Icon data={CreditCard} size={24} />
			</span>
			<Flex direction={'column'} gap={1}>
				<Text variant={'header-2'}>Баланс: {balance} ₽</Text>
				<Text color={'secondary'} variant={'body-2'}>
					Пополните
				</Text>
			</Flex>
		</Flex>
	)
}
