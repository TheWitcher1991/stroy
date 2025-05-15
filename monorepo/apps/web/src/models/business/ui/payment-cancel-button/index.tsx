import { Xmark } from '@gravity-ui/icons'

import { PropsWithPaymentId } from '@stroy/models'

import { Action } from '~packages/ui'

export const PaymentCancelButton = ({
	payment,
	onlyIcon,
}: PropsWithAction<PropsWithPaymentId>) => {
	return (
		<>
			<Action view={'outlined-danger'} icon={Xmark} onlyIcon={onlyIcon}>
				Отменить
			</Action>
		</>
	)
}
