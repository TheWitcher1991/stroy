import { Aperture } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

export default function StroyPlusButton() {
	return (
		<Button view={'action'} size={'m'}>
			<Icon data={Aperture} size={16} />
			Плюс
		</Button>
	)
}
