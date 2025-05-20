import { href } from '@stroy/href'
import { BreadcrumbsItem } from '@stroy/toolkit'

export type SettingResourceType = 'account' | 'department' | 'api-key'

export const generateSettingBreadcrumbs = (variant: SettingResourceType) => {
	const breadcrumbs: BreadcrumbsItem[] = [
		{ text: 'Настройки', href: href.profile },
	]

	switch (variant) {
		case 'account':
			breadcrumbs.push({ text: 'Учетная запись', href: href.profile })
			break
		case 'department':
			breadcrumbs.push({ text: 'Отдел', href: href.profile })
			break
		case 'api-key':
			breadcrumbs.push({ text: 'API-ключи', href: href.profile })
			break
	}

	return breadcrumbs
}
