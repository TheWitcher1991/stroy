import { Label } from '@gravity-ui/uikit'

import { GuardOperation, GuardOperationMapper } from '@stroy/models'

interface GuardOperationListProps {
	operations: GuardOperation[]
}

export default function GuardOperationList({
	operations,
}: GuardOperationListProps) {
	return operations.map(op => (
		<Label size={'s'}>{GuardOperationMapper[op]}</Label>
	))
}
