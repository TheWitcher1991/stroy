import { PropsWithChildren } from 'react'

import styles from './layout.module.scss'

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
	return <div className={styles.auth__layout}>{children}</div>
}
