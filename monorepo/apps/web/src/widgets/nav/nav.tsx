'use client'

import { Person } from '@gravity-ui/icons'
import { ActionBar } from '@gravity-ui/navigation'
import { Button, Icon } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useRouter } from 'next/navigation'

import { useBreadcrumbs } from '~widgets/nav/nav.hooks'

import DepartmentButton from '~features/department-button'
import Notifications from '~features/notifications'
import ThemeButton from '~features/theme-button'

import { DocumentImportButton } from '~models/document'

import { href } from '@stroy/href'

import { Breadcrumbs } from '~packages/ui'

import styles from './nav.module.scss'

export default function Nav() {
	const items = useBreadcrumbs()

	const router = useRouter()

	const handleNewDocClick = useMemoizedFn(() => {
		router.push(href.profile)
	})

	return (
		<ActionBar aria-label='Actions bar' className={styles.nav}>
			<ActionBar.Section type='secondary'>
				<ActionBar.Group>
					<ActionBar.Item>
						<DepartmentButton />
					</ActionBar.Item>
				</ActionBar.Group>
			</ActionBar.Section>
			<ActionBar.Section type='primary'>
				<ActionBar.Group pull='left'>
					<ActionBar.Item>
						<Breadcrumbs items={items} />
					</ActionBar.Item>
				</ActionBar.Group>
				<ActionBar.Group pull='right'>
					<ActionBar.Item>
						<DocumentImportButton />
					</ActionBar.Item>
					<ActionBar.Item>
						<ThemeButton />
					</ActionBar.Item>
					<ActionBar.Item>
						<Notifications />
					</ActionBar.Item>
					<ActionBar.Item>
						<Button view={'outlined'} onClick={handleNewDocClick}>
							<Icon data={Person} size={16} />
						</Button>
					</ActionBar.Item>
				</ActionBar.Group>
			</ActionBar.Section>
		</ActionBar>
	)
}
