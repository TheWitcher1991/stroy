import { useMemo } from 'react'

import GuardOperationList from '~features/guard-operation-list'

import { GuardDeleteButton } from '~models/guard/ui/guard-delete-button'
import { GuardEditButton } from '~models/guard/ui/guard-edit-button'

import { IGuard } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions } from '~packages/ui'

export default function useGuardTableData(guards: IGuard[]) {
	return useMemo(
		() =>
			guards.map(guard => ({
				guard: guard.title,
				operations: (
					<GuardOperationList operations={guard.permissions} />
				),
				created: formatDateInRu(guard.created_at),
				actions: (
					<Actions justifyContent={'end'}>
						<GuardEditButton guard={guard} onlyIcon={true} />
						<GuardDeleteButton guard={guard.id} onlyIcon={true} />
					</Actions>
				),
			})),
		[guards],
	)
}
