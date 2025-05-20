import { House } from '@gravity-ui/icons'
import {
	Box,
	Breadcrumbs as BreadcrumbsComponent,
	Flex,
	Icon,
	Text,
} from '@gravity-ui/uikit'

import { BreadcrumbsItem } from '@stroy/toolkit'

interface BreadcrumbsProps {
	items: BreadcrumbsItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<Flex alignItems={'center'} gap={2}>
			<Icon data={House} size={16} />
			<Text color={'secondary'}>/</Text>
			<Box width={500}>
				<BreadcrumbsComponent maxItems={5}>
					{items.map(({ text, href, action }, index) => (
						<Breadcrumbs.Item
							key={index}
							href={href}
							action={action}
						>
							{text}
						</Breadcrumbs.Item>
					))}
				</BreadcrumbsComponent>
			</Box>
		</Flex>
	)
}
