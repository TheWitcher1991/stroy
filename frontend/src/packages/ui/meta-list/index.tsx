import { Flex } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

export const MetaList = ({
	children,
	width,
}: PropsWithChildren<{ width: number }>) => (
	<Flex direction={'column'} gap={3} width={width}>
		{children}
	</Flex>
)

export * from './meta-list-item'
