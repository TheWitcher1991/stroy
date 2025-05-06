import { Label } from '@gravity-ui/uikit'
import { memo } from 'react'

import { PropsWithTag } from '@stroy/models'

import styles from './index.module.scss'

export const TagLabel = memo(({ tag }: PropsWithTag) => {
	return (
		<Label size={'s'} theme={'unknown'} className={styles.label}>
			<span
				className={styles.labelColor}
				style={{
					backgroundColor: tag.color,
				}}
			></span>
			{tag.title}
		</Label>
	)
})
