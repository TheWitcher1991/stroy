import { Container as GravityContainer } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

import styles from './index.module.scss'

export function Container({ children }: PropsWithChildren) {
	return (
		<GravityContainer className={styles.container} maxWidth={'l'}>
			<>{children}</>
		</GravityContainer>
	)
}
