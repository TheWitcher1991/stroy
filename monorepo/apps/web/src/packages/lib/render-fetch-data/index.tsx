import { Binoculars, Bug } from '@gravity-ui/icons'
import { Icon } from '@gravity-ui/uikit'
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
	<Placeholder
		title={
			<>
				<Icon data={Bug} size={18} />
				Ошибка :(
			</>
		}
		text={'Не удалось загрузить данные'}
	/>
))

const DefaultEmptyFallback = memo(() => (
	<Placeholder
		title={
			<>
				<Icon data={Binoculars} size={18} />
				Пустовато :(
			</>
		}
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
