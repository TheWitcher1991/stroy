import { Flex } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

export const Actions = ({
	children,
	justifyContent,
}: PropsWithChildren<{
	justifyContent?: Flex['justifyContent']
}>) => (
	<Flex alignItems={'center'} gap={2} justifyContent={justifyContent}>
		{children}
	</Flex>
)
