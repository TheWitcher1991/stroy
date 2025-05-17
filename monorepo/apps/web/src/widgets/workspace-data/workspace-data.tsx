import { Flex, Skeleton } from '@gravity-ui/uikit'
import { memo } from 'react'

import { formatBytes } from '@stroy/toolkit'

import { RenderFetchData } from '~packages/lib'
import { ValueCard } from '~packages/ui'

import { useWorkspaceDataStore } from './workspace-data.hooks'

const WorkspaceDataSkeleton = memo(() => <Skeleton style={{ height: 91 }} />)

export default function WorkspaceData() {
	const { indicators, isLoading, isError } = useWorkspaceDataStore()

	return (
		<Flex gap={4} justifyContent={'space-between'} alignItems={'center'}>
			<RenderFetchData
				isLoading={isLoading}
				hasError={isError}
				loadingFallback={<WorkspaceDataSkeleton />}
			>
				<ValueCard value={indicators?.documents} title={'Документов'} />
				<ValueCard
					value={`${formatBytes(indicators?.size as number)}`}
					title={'Общий размер'}
				/>
				<ValueCard value={indicators?.tags} title={'Тегов'} />
				<ValueCard value={indicators?.projects} title={'Проектов'} />
			</RenderFetchData>
		</Flex>
	)
}
