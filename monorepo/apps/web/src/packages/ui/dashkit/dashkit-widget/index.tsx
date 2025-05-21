import { ArrowUpRightFromSquare } from '@gravity-ui/icons'
import { Button, Card, Flex, Icon, Text } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

import styles from './index.module.scss'

interface DashkitWidgetProps extends PropsWithChildren {
	title: string
	href?: string
}

export const DashkitWidget = ({
	title,
	href,
	children,
}: DashkitWidgetProps) => {
	return (
		<Card className={styles.dashkitWidget}>
			<Flex
				alignItems={'center'}
				gap={1}
				className={styles.dashkitWidgetHeader}
			>
				<Text variant={'subheader-2'}>{title}</Text>
				<Button href={href} view={'flat'} disabled={!href}>
					<Icon data={ArrowUpRightFromSquare} size={16} />
				</Button>
			</Flex>
			<Card className={styles.dashkitWidgetContent} view={'filled'}>
				{children}
			</Card>
		</Card>
	)
}
