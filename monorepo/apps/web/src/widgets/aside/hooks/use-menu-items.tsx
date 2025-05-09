import {
	ArrowUpFromSquare,
	Binoculars,
	CircleRuble,
	Cube,
	FileText,
	House,
	Persons,
	Shield,
	Tag,
} from '@gravity-ui/icons'
import { MenuItem } from '@gravity-ui/navigation'
import { usePathname, useRouter } from 'next/navigation'

import { href } from '@stroy/href'

export default function useMenuItems(): MenuItem[] {
	const router = useRouter()
	const pathname = usePathname()

	return [
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
			id: 'guards',
			iconSize: 20,
			title: 'Гуарды',
			icon: Shield,
			current: pathname.startsWith(href.guards.index),
			onItemClick: () => router.push(href.guards.index),
		},
		{
			id: 'journal',
			iconSize: 20,
			title: 'Журнал',
			icon: Binoculars,
			current: pathname.startsWith(href.journal.index),
			onItemClick: () => router.push(href.journal.index),
		},
		{
			id: 'payments',
			iconSize: 20,
			title: 'Биллинг',
			icon: CircleRuble,
		},
		{
			id: 'import',
			title: 'Импорт документа',
			icon: ArrowUpFromSquare,
			type: 'action',
			afterMoreButton: true,
		},
	]
}
