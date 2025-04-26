import { PropsWithChildren, ReactNode } from 'react'

interface RenderFetchDataProps extends PropsWithChildren {
	isLoading: boolean
	hasError?: boolean
	countData?: number | string
	loadingFallback?: ReactNode
	errorFallback?: ReactNode
	emptyFallback?: ReactNode
}

const DefaultLoadingFallback = () => 'Загрузка данных...'
const DefaultErrorFallback = () => 'Ошибка загрузки данных'
const DefaultEmptyFallback = () => 'Нет данных'

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
