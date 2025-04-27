import styles from './index.module.scss'

export interface SpacingProps {
	v?: 'xss' | 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl'
}

const spacingStyle = {
	m: styles.spacing,
	xs: styles.spacing__xs,
	xss: styles.spacing__xss,
	s: styles.spacing__s,
	ml: styles.spacing__ml,
	l: styles.spacing__l,
	xl: styles.spacing__xl,
}

export function Spacing({ v = 'm' }: SpacingProps) {
	return <div className={spacingStyle[v]}></div>
}
