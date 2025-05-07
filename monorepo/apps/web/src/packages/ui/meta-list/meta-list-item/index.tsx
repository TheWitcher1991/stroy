import { Flex, Icon, IconData, Text } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

interface MetaListItemProps extends PropsWithChildren {
	icon: IconData
	title: string
}

export const MetaListItem = ({ icon, title, children }: MetaListItemProps) => {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Text color={'secondary'} variant={'body-2'}>
				<Flex alignItems={'center'} gap={2}>
					<Icon data={icon} size={16} />
					{title}
				</Flex>
			</Text>
			<Text variant={'body-2'} style={{ textAlign: 'right' }}>
				{children}
			</Text>
		</Flex>
	)
}
