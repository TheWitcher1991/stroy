import { Flex, Icon, IconData, Text } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

interface TariffTagProps extends PropsWithChildren {
	icon: IconData
}

export default function TariffTag({ icon, children }: TariffTagProps) {
	return (
		<Flex alignItems={'center'} gap={2}>
			<Text color={'secondary'}>
				<Icon data={icon} size={18} />
			</Text>

			<Text variant={'body-2'}>{children}</Text>
		</Flex>
	)
}
