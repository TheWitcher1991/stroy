'use client'

import { Magnifier, Person } from '@gravity-ui/icons'
import { ActionBar } from '@gravity-ui/navigation'
import { Avatar, Icon, TextInput } from '@gravity-ui/uikit'

import styles from './nav.module.scss'

export default function Nav() {
	return (
		<ActionBar aria-label='Actions bar' className={styles.nav}>
			<ActionBar.Group pull='left'>
				<ActionBar.Item>
					<TextInput
						startContent={
							<div style={{ marginInline: 6 }}>
								<Icon data={Magnifier} size={16} />
							</div>
						}
						placeholder={'Поиск...'}
					/>
				</ActionBar.Item>
			</ActionBar.Group>
			<ActionBar.Section>
				<ActionBar.Group pull='right'>
					<ActionBar.Item>
						<Avatar icon={Person} size='m' />
					</ActionBar.Item>
				</ActionBar.Group>
			</ActionBar.Section>
		</ActionBar>
	)
}
