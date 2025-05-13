import { CreditCard } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit/build/esm'

export const SubscribeButton = () => {
	return (
		<Button width={'max'} view={'outlined'}>
			<Icon data={CreditCard} size={16} />
			Оплатить сейчас
		</Button>
	)
}
