import { Text } from '@gravity-ui/uikit'
import { memo, ReactNode } from 'react'

import styles from './index.module.scss'

interface PlaceholderProps {
	title?: string | ReactNode
	text?: string | ReactNode
}

export const Placeholder = memo(
	({
		title = 'Нет данных',
		text = 'Попробуйте изменить параметры поиска',
	}: PlaceholderProps) => (
		<div className={styles.placeholder}>
			<Text
				variant={'subheader-2'}
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 6,
				}}
			>
				{title}
			</Text>
			<Text variant={'body-1'}>
				<>{text}</>
			</Text>
		</div>
	),
)
