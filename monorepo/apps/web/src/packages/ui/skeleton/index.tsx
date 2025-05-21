import { Skeleton as SkeletonComponent } from '@gravity-ui/uikit'
import { CSSProperties, memo } from 'react'

interface SkeletonProps {
	width?: CSSProperties['width']
	height?: CSSProperties['height']
	animation?: SkeletonComponent['animation']
}

export const Skeleton = memo(
	({ width, height, animation = 'pulse' }: SkeletonProps) => (
		<SkeletonComponent style={{ width, height }} animation={animation} />
	),
)
