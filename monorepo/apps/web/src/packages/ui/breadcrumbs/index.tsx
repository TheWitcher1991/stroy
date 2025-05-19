import { House } from '@gravity-ui/icons'
import { Breadcrumbs as BreadcrumbsComponent, Icon } from '@gravity-ui/uikit'

import { href } from '@stroy/href'
import { BreadcrumbsItem } from '@stroy/toolkit'

interface BreadcrumbsProps {
	items: BreadcrumbsItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<BreadcrumbsComponent maxItems={5} showRoot={true}>
			<Breadcrumbs.Item href={href.workspace}>
				<Icon data={House} size={16} />
			</Breadcrumbs.Item>
			{items.map(({ text, href, icon, action }, index) => (
				<Breadcrumbs.Item
					key={index}
					href={href}
					icon={icon}
					action={action}
				>
					{text}
				</Breadcrumbs.Item>
			))}
		</BreadcrumbsComponent>
	)
}
