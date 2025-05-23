import {
	Archive,
	ClockArrowRotateLeft,
	CloudArrowUpIn,
	LifeRing,
	Link,
	ListUl,
	Persons,
} from '@gravity-ui/icons'
import { Button, Card, Flex, Text } from '@gravity-ui/uikit'

import TariffTag from '~features/business/stroy-plus/tariff-card/tariff-tag'

import { STROY_PLUS } from '@stroy/system'

import { Spacing } from '~packages/ui'

import styles from './index.module.scss'

export const TariffCard = () => {
	return (
		<Card className={styles.tariff} view={'filled'} width={'fit-content'}>
			<Text variant={'body-1'} color={'secondary'}>
				Тариф
			</Text>
			<Text variant={'header-2'}>Stroy Плюс</Text>
			<Spacing />
			<Flex gap={3} direction={'column'}>
				<TariffTag icon={CloudArrowUpIn}>
					Загрузка файлов до 50 гб
				</TariffTag>
				<TariffTag icon={Archive}>
					Безлимитное хранение документов
				</TariffTag>
				<TariffTag icon={Persons}>Безлимитные пользователи</TariffTag>
				<TariffTag icon={ClockArrowRotateLeft}>
					Расширенная история изменений
				</TariffTag>
				<TariffTag icon={Link}>
					Неограниченные публичные ссылки
				</TariffTag>
				<TariffTag icon={LifeRing}>Приоритетная поддержка</TariffTag>
				<TariffTag icon={ListUl}>И другие преимущества</TariffTag>
			</Flex>
			<Spacing />
			<Button view={'action'} size={'xl'} width={'max'} disabled>
				Подключить за {STROY_PLUS}/мес
			</Button>
		</Card>
	)
}
