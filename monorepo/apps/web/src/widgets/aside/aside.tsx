'use client'

import { LogoStackOverflow } from '@gravity-ui/icons'
import { AsideHeader } from '@gravity-ui/navigation'
import { Fragment, PropsWithChildren, useState } from 'react'

import useFooter from '~widgets/aside/hooks/use-footer'
import useMenuItems from '~widgets/aside/hooks/use-menu-items'

import styles from './aside.module.scss'

export default function Aside({ children }: PropsWithChildren) {
	const [compact, setCompact] = useState(false)

	const menuItems = useMenuItems()

	const footer = useFooter()

	return (
		<AsideHeader
			logo={{
				icon: LogoStackOverflow,
				text: 'StroyOverflow',
				iconSize: 26,
				textSize: 18,
				className: styles.text,
				iconClassName: styles.aside,
			}}
			compact={compact}
			onChangeCompact={setCompact}
			headerDecoration={true}
			renderContent={() => <>{children}</>}
			multipleTooltip={true}
			editMenuProps={{ enableSorting: true }}
			menuItems={menuItems}
			renderFooter={() => footer}
		/>
	)
}
