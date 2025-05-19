import { href } from '@stroy/href'
import { Dictionary, ResourceType } from '@stroy/types'

export type BreadcrumbVariant = 'index' | 'create' | 'edit' | 'view'

export interface BreadcrumbsItem {
	text: string
	href: string
	action?: () => void
	icon?: string
}

export interface GenerateBreadcrumbsOptions {
	resource: ResourceType
	variant: BreadcrumbVariant
	id?: number
	resourceMap: Dictionary<string>
}

export const generateBreadcrumbs = ({
	resource,
	variant,
	id,
	resourceMap,
}: GenerateBreadcrumbsOptions): BreadcrumbsItem[] => {
	const baseText = resourceMap[resource]
	const baseHref = href[resource].index

	const breadcrumbs: BreadcrumbsItem[] = [{ text: baseText, href: baseHref }]

	switch (variant) {
		case 'create':
			breadcrumbs.push({ text: 'Добавить', href: href[resource].create })
			break
		case 'edit':
			breadcrumbs.push({
				text: 'Редактировать',
				href: id ? href[resource].edit(id) : '#',
			})
			break
		case 'view':
			breadcrumbs.push({
				text: 'Просмотр',
				href: id ? href[resource].byId(id) : '#',
			})
			break
	}

	return breadcrumbs
}
