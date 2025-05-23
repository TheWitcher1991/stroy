import { Text } from '@gravity-ui/uikit'
import { memo, useMemo } from 'react'

import { GuardOperationList } from '~features/guard'

import { GuardViewButton } from '~models/guard'
import { GuardDeleteButton } from '~models/guard/ui/guard-delete-button'
import { GuardEditButton } from '~models/guard/ui/guard-edit-button'

import { IGuard, PropsWithGuard, useIamAdmin } from '@stroy/models'
import { formatDateInRu } from '@stroy/toolkit'

import { Actions } from '~packages/ui'

const GuardRowActions = memo(({ guard }: PropsWithGuard) => {
	const iam = useIamAdmin()

	return (
		<Actions justifyContent={'end'}>
			{iam ? (
				<>
					<GuardEditButton guard={guard} onlyIcon={true} />
					<GuardDeleteButton guard={guard} onlyIcon={true} />
				</>
			) : (
				<GuardViewButton guard={guard} onlyIcon={true} />
			)}
		</Actions>
	)
})

export default function useGuardTableData(guards: IGuard[]) {
	return useMemo(
		() =>
			guards.map(guard => ({
				guard: <Text variant={'body-2'}>{guard.title}</Text>,
				operations: (
					<GuardOperationList operations={guard.permissions} />
				),
				created: formatDateInRu(guard.created_at),
				actions: <GuardRowActions guard={guard} />,
			})),
		[guards],
	)
}
