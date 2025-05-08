import { Flex, Icon, IconData, Text } from '@gravity-ui/uikit'

import styles from './index.module.scss'

interface CellProps {
	icon?: IconData
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
				{iconText && <Text variant={'subheader-1'}>{iconText}</Text>}
			</span>
			<Flex direction={'column'}>
				<Text>{title}</Text>
				<Text variant={'body-short'} color={'secondary'}>
					{subtitle}
				</Text>
			</Flex>
		</Flex>
	)
}
