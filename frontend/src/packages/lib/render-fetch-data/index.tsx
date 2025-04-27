import { PropsWithChildren, ReactNode } from 'react'

import { Placeholder } from '~packages/ui'

interface RenderFetchDataProps extends PropsWithChildren {
	isLoading: boolean
	hasError?: boolean
	countData?: number | string
	loadingFallback?: ReactNode
	errorFallback?: ReactNode
	emptyFallback?: ReactNode
}

const DefaultLoadingFallback = () => (
	<Placeholder title={'Загрузка...'} text={''} />
)
const DefaultErrorFallback = () => (
	<Placeholder title={'Ошибка :('} text={'Не удалось загрузить данные'} />
)
const DefaultEmptyFallback = () => <Placeholder />

export const RenderFetchData = ({
	isLoading,
	hasError = false,
	countData,
	children,
	loadingFallback = <DefaultLoadingFallback />,
	errorFallback = <DefaultErrorFallback />,
	emptyFallback = <DefaultEmptyFallback />,
}: RenderFetchDataProps) => {
	if (isLoading) {
		return <>{loadingFallback}</>
	}

	if (hasError) {
		return <>{errorFallback}</>
	}

	if (countData !== undefined && Number(countData) === 0) {
		return <>{emptyFallback}</>
	}

	return <>{children}</>
}
