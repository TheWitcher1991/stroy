import { ClockArrowRotateLeft } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'

export const SubscriptionHistoryButton = () => {
	return (
		<Button width={'max'} view={'outlined'}>
			<Icon data={ClockArrowRotateLeft} size={16} />
			История
		</Button>
	)
}
