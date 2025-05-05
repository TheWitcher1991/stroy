import { useMemo } from 'react'

import GuardOperationList from '~features/guard-operation-list'

import { IGuard } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

export default function useGuardTableData(guards: IGuard[]) {
	return useMemo(
		() =>
			guards.map(guard => ({
				guard: guard.title,
				operations: (
					<GuardOperationList operations={guard.operations} />
				),
				created: formatDateInRu(guard.created_at),
				actions: <></>,
			})),
		[guards],
	)
}
