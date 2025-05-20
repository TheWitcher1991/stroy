import { href } from '@stroy/href'
import { ResourceType } from '@stroy/types'

export type BreadcrumbVariant = 'index' | 'create' | 'edit' | 'view'

export interface BreadcrumbsItem {
	text: string
	href: string
	action?: () => void
	icon?: string
}

export const breadcrumbsMapper: Record<
	ResourceType,
	Record<BreadcrumbVariant, string>
> = {
	documents: {
		index: 'Документы',
		create: 'Добавить документ',
		edit: 'Редактировать документ',
		view: 'Просмотр документа',
	},
	tags: {
		index: 'Теги',
		create: 'Добавить тег',
		edit: 'Редактировать тег',
		view: 'Просмотр тега',
	},
	projects: {
		index: 'Проекты',
		create: 'Добавить проект',
		edit: 'Редактировать проект',
		view: 'Просмотр проекта',
	},
	users: {
		index: 'Пользователи',
		create: 'Добавить пользователя',
		edit: 'Редактировать пользователя',
		view: 'Просмотр пользователя',
	},
	guards: {
		index: 'Гуарды',
		create: 'Добавить гуард',
		edit: 'Редактировать гуард',
		view: 'Просмотр гуарда',
	},
}

export interface GenerateBreadcrumbsOptions {
	resource: ResourceType
	variant: BreadcrumbVariant
	id?: number
}

export const generateBreadcrumbs = ({
	resource,
	variant,
	id,
}: GenerateBreadcrumbsOptions): BreadcrumbsItem[] => {
	const baseText = breadcrumbsMapper[resource]['index']
	const baseHref = href[resource].index

	const breadcrumbs: BreadcrumbsItem[] = [{ text: baseText, href: baseHref }]

	switch (variant) {
		case 'create':
			breadcrumbs.push({
				text: breadcrumbsMapper[resource]['create'],
				href: href[resource].create,
			})
			break
		case 'edit':
			breadcrumbs.push({
				text: breadcrumbsMapper[resource]['edit'],
				href: id ? href[resource].edit(id) : '#',
			})
			break
		case 'view':
			breadcrumbs.push({
				text: breadcrumbsMapper[resource]['view'],
				href: id ? href[resource].byId(id) : '#',
			})
			break
	}

	return breadcrumbs
}
