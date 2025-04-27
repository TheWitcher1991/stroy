'use client'

import { LogoStackOverflow } from '@gravity-ui/icons'
import { Icon } from '@gravity-ui/uikit'
import { PropsWithChildren } from 'react'

import styles from './layout.module.scss'

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className={styles.auth__layout}>
			<div className={styles.logo}>
				<Icon
					data={LogoStackOverflow}
					size={26}
					className={styles.logo__icon}
				/>
				StroyOverflow
			</div>
			{children}
		</div>
	)
}
