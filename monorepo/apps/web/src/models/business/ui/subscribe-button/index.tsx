import { CreditCard } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import toast from 'react-hot-toast'

import { useSubscribe } from '@stroy/models'
import { query } from '@stroy/toolkit'

export const SubscribeButton = () => {
	const req = useSubscribe()

	const subscribe = async () => {
		await query(async () => {
			await req.mutateAsync(undefined)
			toast.success('Подписка оформлена')
		})
	}

	return (
		<Button
			width={'max'}
			view={'outlined'}
			onClick={subscribe}
			loading={req.isPending}
		>
			<Icon data={CreditCard} size={16} />
			Оплатить сейчас
		</Button>
	)
}
