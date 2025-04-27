'use client'

import {
	ArrowUpFromSquare,
	Cube,
	FileText,
	Hierarchy,
	House,
	LogoStackOverflow,
	Persons,
	Tag,
} from '@gravity-ui/icons'
import { AsideHeader } from '@gravity-ui/navigation'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment, PropsWithChildren } from 'react'

import href from '~packages/href'

import styles from './aside.module.scss'

export default function Aside({ children }: PropsWithChildren) {
	const router = useRouter()
	const pathname = usePathname()

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
			compact={false}
			hideCollapseButton={true}
			headerDecoration={true}
			renderContent={() => <>{children}</>}
			menuItems={[
				{
					id: 'dashboard',
					title: 'Дашборд',
					icon: House,
					iconSize: 20,
					current: pathname === href.workspace,
					onItemClick: () => router.push(href.workspace),
				},
				{
					id: 'documents',
					title: 'Документы',
					iconSize: 20,
					icon: FileText,
					current: pathname.startsWith(href.documents.index),
					onItemClick: () => router.push(href.documents.index),
				},
				{
					id: 'tags',
					iconSize: 20,
					title: 'Теги',
					icon: Tag,
					current: pathname.startsWith(href.tags.index),
					onItemClick: () => router.push(href.tags.index),
				},
				{
					id: 'projects',
					iconSize: 20,
					title: 'Проекты',
					icon: Cube,
					current: pathname.startsWith(href.projects.index),
					onItemClick: () => router.push(href.projects.index),
				},
				{
					id: 'users',
					iconSize: 20,
					title: 'Пользователи',
					icon: Persons,
					current: pathname.startsWith(href.users.index),
					onItemClick: () => router.push(href.users.index),
				},
				{
					id: 'journal',
					iconSize: 20,
					title: 'Журнал',
					icon: Hierarchy,
					current: pathname.startsWith(href.journal.index),
					onItemClick: () => router.push(href.journal.index),
				},
				{
					id: 'import',
					title: 'Импорт документа',
					icon: ArrowUpFromSquare,
					type: 'action',
				},
			]}
		/>
	)
}
