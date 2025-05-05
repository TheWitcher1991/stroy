import { Moon, Sun } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

import { useTheme } from '@stroy/hooks'

export default function ThemeButton() {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button view={'outlined'} onClick={toggleTheme}>
			<Icon data={theme === 'dark' ? Moon : Sun} size={16} />
		</Button>
	)
}
