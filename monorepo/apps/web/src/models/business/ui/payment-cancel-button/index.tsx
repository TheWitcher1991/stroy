import { Xmark } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'
import toast from 'react-hot-toast'

import { PropsWithPaymentId, useCancelPayment } from '@stroy/models'
import { query } from '@stroy/toolkit'

import { Action, Dialog } from '~packages/ui'

export const PaymentCancelButton = ({
	payment,
	onlyIcon,
}: PropsWithAction<PropsWithPaymentId>) => {
	const req = useCancelPayment()
	const [val, { toggle }] = useToggle(false)

	const handleClick = async () => {
		await query(async () => {
			await req.mutateAsync(payment)
			toast.success('Платеж отменен')
		})
	}

	return (
		<>
			<Dialog
				onClose={toggle}
				open={val}
				loading={req.isPending}
				caption={'Удалить документ'}
				textButtonApply={'Удалить'}
				onClickButtonApply={handleClick}
			>
				Вы действительно хотите отменить платеж?
			</Dialog>

			<Action
				view={'outlined-danger'}
				icon={Xmark}
				onlyIcon={onlyIcon}
				onClick={toggle}
			>
				Отменить
			</Action>
		</>
	)
}
