import { Flex, Skeleton } from '@gravity-ui/uikit'

import { useDepartmentIndicators } from '@stroy/models'

import { RenderFetchData } from '~packages/lib'
import { ValueCard } from '~packages/ui'

const WorkspaceDataSkeleton = () => <Skeleton style={{ height: 91 }} />

export default function WorkspaceData() {
	const { isLoading, indicators, isError } = useDepartmentIndicators()

	return (
		<Flex gap={4} justifyContent={'space-between'} alignItems={'center'}>
			<RenderFetchData
				isLoading={isLoading}
				hasError={isError}
				countData={0}
				loadingFallback={<WorkspaceDataSkeleton />}
			>
				<ValueCard value={indicators?.documents} title={'Документов'} />
				<ValueCard
					value={`${indicators?.size} KB`}
					title={'Общий размер'}
				/>
				<ValueCard value={indicators?.tags} title={'Тегов'} />
				<ValueCard value={indicators?.projects} title={'Проектов'} />
			</RenderFetchData>
		</Flex>
	)
}
