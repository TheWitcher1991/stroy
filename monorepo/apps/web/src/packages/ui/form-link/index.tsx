import Link from 'next/link'
import { PropsWithChildren } from 'react'

import styles from './index.module.scss'

interface FormLinkProps extends PropsWithChildren {
	href: string
}

export function FormLink({ href, children }: FormLinkProps) {
	return (
		<>
			<Link className={styles.form__link} href={href}>
				{children}
			</Link>
		</>
	)
}
