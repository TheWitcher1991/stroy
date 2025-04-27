import { Flex, Skeleton } from '@gravity-ui/uikit'

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
			<Skeleton
				style={{
					width: '100%',
					height: columnHeight,
				}}
			/>
			{[...Array(count).keys()].map(key => (
				<Skeleton
					key={key}
					style={{
						width: '100%',
						height: rowHeight,
					}}
				/>
			))}
		</Flex>
	)
}
