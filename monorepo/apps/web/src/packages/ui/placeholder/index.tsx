import { Text } from '@gravity-ui/uikit'
import { ReactNode } from 'react'

import styles from './index.module.scss'

interface PlaceholderProps {
	title?: string
	text?: string | ReactNode
}

export const Placeholder = ({
	title = 'Нет данных',
	text = 'Попробуйте изменить параметры поиска',
}: PlaceholderProps) => (
	<div className={styles.placeholder}>
		<Text variant={'subheader-2'}>{title}</Text>
		<Text variant={'body-1'}>
			<>{text}</>
		</Text>
	</div>
)
