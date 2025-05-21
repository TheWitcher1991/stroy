import { Flex } from '@gravity-ui/uikit'

import { Skeleton } from '~packages/ui'

interface TableSkeletonProps {
	count?: number
	rowHeight?: number
	columnHeight?: number
}

export default function TableSkeleton({
	count = 8,
	rowHeight = 64,
	columnHeight = 40,
}: TableSkeletonProps) {
	return (
		<Flex direction={'column'} gap={2}>
			<Skeleton width={'100%'} height={columnHeight} />
			{[...Array(count).keys()].map(key => (
				<Skeleton key={key} width={'100%'} height={rowHeight} />
			))}
		</Flex>
	)
}
