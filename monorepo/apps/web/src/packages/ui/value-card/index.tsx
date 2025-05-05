import { Card, Text } from '@gravity-ui/uikit'

import styles from './index.module.scss'

interface ValueCardProps {
	value?: string | number
	title: string
}

export const ValueCard = ({ value, title }: ValueCardProps) => {
	return (
		<Card className={styles.valueCard} view={'filled'}>
			<Text variant={'display-1'}>{value}</Text>
			<Text variant={'body-2'} color={'secondary'}>
				{title}
			</Text>
		</Card>
	)
}
