'use client'

import { Magnifier, Person } from '@gravity-ui/icons'
import { ActionBar } from '@gravity-ui/navigation'
import { Button, Icon, TextInput } from '@gravity-ui/uikit'

import ThemeButton from '~features/theme-button'

import { DocumentImportButton } from '~models/document'

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
						<DocumentImportButton />
					</ActionBar.Item>
					<ActionBar.Item>
						<ThemeButton />
					</ActionBar.Item>
					<ActionBar.Item>
						<Button view={'outlined'}>
							<Icon data={Person} size={16} />
						</Button>
					</ActionBar.Item>
				</ActionBar.Group>
			</ActionBar.Section>
		</ActionBar>
	)
}
