import { InternalError, NotFound } from '@gravity-ui/illustrations'
import { Icon, PlaceholderContainer } from '@gravity-ui/uikit'
import { memo, PropsWithChildren, ReactNode } from 'react'
import { match } from 'ts-pattern'

import { Placeholder } from '~packages/ui'

interface RenderFetchDataProps extends PropsWithChildren {
	isLoading: boolean
	hasError?: boolean
	countData?: number | string
	loadingFallback?: ReactNode
	errorFallback?: ReactNode
	emptyFallback?: ReactNode
}

const DefaultLoadingFallback = memo(() => (
	<Placeholder title={'Поиск данных...'} text={''} />
))

const DefaultErrorFallback = memo(() => (
	<PlaceholderContainer
		title='Ошибка'
		description='При загрузке данных произошла ошибка'
		size='m'
		align='center'
		image={<Icon data={InternalError} size={220} />}
	/>
))

const DefaultEmptyFallback = memo(() => (
	<PlaceholderContainer
		title='Ничего не нашлось'
		description='Попробуйте изменить параметры поиска'
		size='m'
		align='center'
		image={<Icon data={NotFound} size={220} />}
	/>
))

export const RenderFetchData = ({
	isLoading,
	hasError = false,
	countData,
	children,
	loadingFallback = <DefaultLoadingFallback />,
	errorFallback = <DefaultErrorFallback />,
	emptyFallback = <DefaultEmptyFallback />,
}: RenderFetchDataProps) => {
	return match({ isLoading, hasError, countData })
		.with({ isLoading: true }, () => loadingFallback)
		.with({ hasError: true }, () => errorFallback)
		.with({ countData: 0 }, () => emptyFallback)
		.otherwise(() => children)
}
