import { CreditCard } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

export const SubscribeButton = () => {
	return (
		<Button width={'max'} view={'outlined'}>
			<Icon data={CreditCard} size={16} />
			Оплатить сейчас
		</Button>
	)
}
