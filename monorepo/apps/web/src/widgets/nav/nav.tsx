'use client'

import { Magnifier, Person } from '@gravity-ui/icons'
import { ActionBar } from '@gravity-ui/navigation'
import { Button, Icon, Select, TextInput } from '@gravity-ui/uikit'
import { useRouter } from 'next/navigation'

import ThemeButton from '~features/theme-button'

import { DocumentImportButton } from '~models/document'

import { href } from '@stroy/href'
import { useIam } from '@stroy/models'

import styles from './nav.module.scss'

export default function Nav() {
	const iam = useIam()

	const router = useRouter()

	const handleNewDocClick = () => {
		router.push(href.profile)
	}

	return (
		<ActionBar aria-label='Actions bar' className={styles.nav}>
			<ActionBar.Section type='secondary'>
				<ActionBar.Group>
					<ActionBar.Item>
						<Select
							value={[iam.department_name]}
							options={[
								{
									content: iam.department_name,
									value: iam.department.toString(),
								},
							]}
							title={'Выберите рабочее пространство'}
						/>
					</ActionBar.Item>
				</ActionBar.Group>
			</ActionBar.Section>
			<ActionBar.Section type='primary'>
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
				<ActionBar.Group pull='right'>
					<ActionBar.Item>
						<DocumentImportButton />
					</ActionBar.Item>
					<ActionBar.Item>
						<ThemeButton />
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
