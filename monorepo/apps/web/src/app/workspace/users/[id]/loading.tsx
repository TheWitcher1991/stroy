'use client'

import { Group, Skeleton } from '~packages/ui'

export default function UserLoading() {
	return (
		<Group>
			<Skeleton height={48} />
			<Skeleton height={40} />
			<Skeleton height={256} />
		</Group>
	)
}
