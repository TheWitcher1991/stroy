import { Plus } from '@gravity-ui/icons'
import { Button, Flex, Icon, Text } from '@gravity-ui/uikit'

interface PageTitleProps {
	title: string
	subtitle?: string
	buttonOnClick?: () => void
	buttonTitle?: string
}

export const PageTitle = ({
	title,
	subtitle,
	buttonTitle,
	buttonOnClick,
}: PageTitleProps) => {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Flex direction='column' gap={1}>
				<Text variant={'header-1'}>{title}</Text>
				{subtitle && (
					<Text variant={'body-2'} color={'secondary'}>
						{subtitle}
					</Text>
				)}
			</Flex>
			{buttonTitle && (
				<Button
					onClick={buttonOnClick}
					type={'button'}
					view={'action'}
					size={'l'}
				>
					<Icon data={Plus} size={16} />
					{buttonTitle}
				</Button>
			)}
		</Flex>
	)
}
