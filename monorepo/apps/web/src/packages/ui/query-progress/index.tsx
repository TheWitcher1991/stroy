import { Progress } from '@gravity-ui/uikit'

import { Nullable } from '@stroy/types'

import { Spacing } from '~packages/ui'

interface QueryProgressProps {
	loading?: boolean
	uploaded?: number
	total?: number
	sizeType?: string
	value: Nullable<number>
}

export function QueryProgress({
	loading,
	value,
	sizeType = 'МБ',
	total,
	uploaded,
}: QueryProgressProps) {
	return (
		value && (
			<>
				<Spacing />
				<Progress
					theme={'info'}
					size={'m'}
					value={value}
					loading={loading || false}
					text={`Загружено ${value}% из ${total?.toFixed(2)} ${sizeType} (${uploaded?.toFixed(2)} ${sizeType})`}
				/>
			</>
		)
	)
}
