import { PropsWithChildren } from 'react'

import styles from './index.module.scss'

export function Group({ children }: PropsWithChildren) {
	return (
		<section className={styles.group}>
			<>{children}</>
		</section>
	)
}
