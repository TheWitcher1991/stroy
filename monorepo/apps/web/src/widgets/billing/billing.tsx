'use client'

import { Flex, Text } from '@gravity-ui/uikit'

import { TariffCard } from '~widgets/billing/tariff-card'

import { Spacing } from '~packages/ui'

export default function Billing() {
	return (
		<Flex direction={'column'} alignItems={'center'} gap={1}>
			<Text variant={'header-1'}>Улучшенное хранение</Text>
			<Text variant={'body-2'}>
				Получите больше возможностей с Stroy Плюс
			</Text>
			<Spacing v={'s'} />
			<TariffCard />
		</Flex>
	)
}
