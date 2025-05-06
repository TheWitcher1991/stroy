import { Label } from '@gravity-ui/uikit'

import { GuardOperation, GuardOperationMapper } from '@stroy/models'

import { Actions } from '~packages/ui'

interface GuardOperationListProps {
	operations: GuardOperation[]
}

export default function GuardOperationList({
	operations,
}: GuardOperationListProps) {
	return (
		<Actions>
			{operations.map(op => (
				<Label size={'s'}>{GuardOperationMapper[op]}</Label>
			))}
		</Actions>
	)
}
