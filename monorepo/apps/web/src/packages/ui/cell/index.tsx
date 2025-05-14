import { Flex, Icon, IconData, Text } from '@gravity-ui/uikit'
import { ReactNode } from 'react'

import styles from './index.module.scss'

interface CellProps {
	icon?: IconData
	iconComponent?: ReactNode
	iconText?: string
	title?: string
	subtitle?: string
	onClick?: () => void
}

export const Cell = ({
	icon,
	iconText,
	title,
	subtitle,
	iconComponent,
	onClick,
}: CellProps) => {
	return (
		<Flex
			gap={2}
			alignItems={'center'}
			onClick={onClick}
			className={styles.cell}
		>
			<span className={styles.cellIcon}>
				{icon && <Icon data={icon} size={19} />}
				{iconComponent}
				{iconText && <Text variant={'subheader-1'}>{iconText}</Text>}
			</span>
			<Flex direction={'column'} overflow={'hidden'}>
				<Text className={'g-text__expand'}>{title}</Text>
				<Text variant={'body-short'} color={'secondary'}>
					{subtitle}
				</Text>
			</Flex>
		</Flex>
	)
}
