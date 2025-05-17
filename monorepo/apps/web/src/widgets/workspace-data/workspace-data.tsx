import { Flex, Skeleton } from '@gravity-ui/uikit'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { formatBytes } from '@stroy/toolkit'

import { RenderFetchData } from '~packages/lib'
import { ValueCard } from '~packages/ui'

import { workSpaceData } from './workspace-data.model'

const WorkspaceDataSkeleton = memo(() => <Skeleton style={{ height: 91 }} />)

export default function WorkspaceData() {
	const [indicators, isLoading, isError] = useUnit([
		workSpaceData.$indicators,
		workSpaceData.$loading,
		workSpaceData.$error,
	])

	return (
		<Flex gap={4} justifyContent={'space-between'} alignItems={'center'}>
			<RenderFetchData
				isLoading={isLoading}
				hasError={isError}
				loadingFallback={<WorkspaceDataSkeleton />}
			>
				<ValueCard value={indicators?.documents} title={'Документов'} />
				<ValueCard
					value={`${formatBytes(indicators?.size)}`}
					title={'Общий размер'}
				/>
				<ValueCard value={indicators?.tags} title={'Тегов'} />
				<ValueCard value={indicators?.projects} title={'Проектов'} />
			</RenderFetchData>
		</Flex>
	)
}
