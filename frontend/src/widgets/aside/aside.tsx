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
import { useRouter } from 'next/navigation'
import { Fragment, PropsWithChildren } from 'react'

import styles from './aside.module.scss'

export default function Aside({ children }: PropsWithChildren) {
	const router = useRouter()

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
					id: 'books',
					title: 'Дашборд',
					icon: House,
					iconSize: 20,
					current: true,
				},
				{
					id: 'favorites',
					title: 'Документы',
					iconSize: 20,
					icon: FileText,
				},
				{
					id: 'search',
					iconSize: 20,
					title: 'Теги',
					icon: Tag,
				},
				{
					id: 'profile',
					iconSize: 20,
					title: 'Проекты',
					icon: Cube,
				},
				{
					id: 'billing',
					iconSize: 20,
					title: 'Пользователи',
					icon: Persons,
				},
				{
					id: 'logout',
					iconSize: 20,
					title: 'Журнал',
					icon: Hierarchy,
				},
				{
					id: 'create',
					title: 'Импорт документа',
					icon: ArrowUpFromSquare,
					type: 'action',
				},
			]}
		/>
	)
}
