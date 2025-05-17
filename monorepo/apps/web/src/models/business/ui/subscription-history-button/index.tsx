import { ClockArrowRotateLeft } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useMemoizedFn } from 'ahooks'
import { useRouter } from 'next/navigation'

import { href } from '@stroy/href'

export const SubscriptionHistoryButton = () => {
	const router = useRouter()

	const onClick = useMemoizedFn(() => router.push(href.finances.transactions))

	return (
		<Button width={'max'} view={'outlined'} onClick={onClick}>
			<Icon data={ClockArrowRotateLeft} size={16} />
			История
		</Button>
	)
}
