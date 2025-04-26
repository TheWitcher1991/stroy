'use client'

import {
	ArrowRightFromSquare,
	ArrowUpFromSquare,
	Book,
	Bookmark,
	CirclesConcentric,
	CreditCard,
	Cube,
	FileText,
	Hierarchy,
	House,
	LogoNotion,
	Magnifier,
	Person,
	Persons,
	Plus,
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
				icon: CirclesConcentric,
				text: 'StroyWorkspace',
				iconSize: 26,
				textSize: 18,
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
					current: true,
				},
				{
					id: 'favorites',
					title: 'Документы',
					icon: FileText,
				},
				{
					id: 'search',
					title: 'Теги',
					icon: Tag,
				},
				{
					id: 'profile',
					title: 'Проекты',
					icon: Cube,
				},
				{
					id: 'billing',
					title: 'Пользователи',
					icon: Persons,
				},
				{
					id: 'logout',
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
