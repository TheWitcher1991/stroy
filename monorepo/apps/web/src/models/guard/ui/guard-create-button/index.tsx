import { Plus } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { GuardCreateModal } from '~models/guard'

import { useIamAdmin } from '@stroy/models'

export const GuardCreateButton = () => {
	const iam = useIamAdmin()

	const [val, { toggle }] = useToggle(false)

	if (!iam) return null

	return (
		<>
			<GuardCreateModal open={val} onClose={toggle} />

			<Button onClick={toggle} type={'button'} view={'action'} size={'l'}>
				<Icon data={Plus} size={16} />
				Создать гуард
			</Button>
		</>
	)
}
