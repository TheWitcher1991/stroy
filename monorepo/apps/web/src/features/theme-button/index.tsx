import { Moon } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

export default function ThemeButton() {
	return (
		<Button view={'outlined'}>
			<Icon data={Moon} size={16} />
		</Button>
	)
}
