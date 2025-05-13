import { Flex, Label } from '@gravity-ui/uikit'

import { GuardOperation, GuardOperationMapper } from '@stroy/models'

interface GuardOperationListProps {
	operations: GuardOperation[]
}

export default function GuardOperationList({
	operations,
}: GuardOperationListProps) {
	return (
		<Flex alignItems={'center'} gap={2} wrap={'wrap'}>
			{operations.map((op, index) => (
				<Label key={index} size={'s'}>
					{GuardOperationMapper[op]}
				</Label>
			))}
		</Flex>
	)
}
