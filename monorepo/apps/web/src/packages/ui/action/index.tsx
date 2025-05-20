import { Button, Icon, IconData } from '@gravity-ui/uikit'
import { ReactNode } from 'react'

interface ActionsProps {
	onClick?: (e?: any) => void
	iconSize?: number
	children?: ReactNode
	icon: IconData
	loading?: boolean
	selected?: boolean
	disabled?: boolean
}

export const Action = ({
	onClick,
	onlyIcon,
	size,
	view = 'outlined',
	children,
	icon,
	loading,
	selected,
	disabled,
	width,
	iconSize = 16,
}: PropsWithAction<ActionsProps>) => {
	return (
		<Button
			view={view}
			size={size}
			onClick={onClick}
			loading={loading}
			disabled={disabled}
			width={width}
			selected={selected}
		>
			<Icon data={icon} size={iconSize} />
			{!onlyIcon && children}
		</Button>
	)
}
