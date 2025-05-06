import { Cube, FileText, Persons, Shield, Tag } from '@gravity-ui/icons'
import { Flex, Icon, Text } from '@gravity-ui/uikit'

import styles from './index.module.scss'

type IndicatorResource = 'documents' | 'projects' | 'tags' | 'guards' | 'users'

interface IndicatorProps {
	resource?: IndicatorResource
	count: number
}

const icon = {
	documents: FileText,
	projects: Cube,
	tags: Tag,
	guards: Shield,
	users: Persons,
}

export const Indicator = ({
	resource = 'documents',
	count = 0,
}: IndicatorProps) => {
	return (
		<Flex gap={1}>
			<Icon
				data={icon[resource]}
				size={16}
				className={styles.indicator}
			/>
			<Text>{count}</Text>
		</Flex>
	)
}
