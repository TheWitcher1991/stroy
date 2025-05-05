import { Plus } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { TagCreateModal } from '~models/tag'

export const TagCreateButton = () => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<TagCreateModal open={val} onClose={toggle} />

			<Button onClick={toggle} type={'button'} view={'action'} size={'l'}>
				<Icon data={Plus} size={16} />
				Создать тег
			</Button>
		</>
	)
}
