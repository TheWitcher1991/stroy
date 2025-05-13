import { Xmark } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

export const UnsubscribeButton = () => {
	return (
		<Button width={'max'} view={'outlined'}>
			<Icon data={Xmark} size={16} />
			Отменить подписку
		</Button>
	)
}
