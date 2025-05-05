import { Plus } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { UserCreateModal } from '~models/user'

export const UserCreateButton = () => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<UserCreateModal open={val} onClose={toggle} />

			<Button onClick={toggle} type={'button'} view={'action'} size={'l'}>
				<Icon data={Plus} size={16} />
				Добавить пользователя
			</Button>
		</>
	)
}
