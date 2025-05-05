import { Plus } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { ProjectCreateModal } from '~models/project'

export const ProjectCreateButton = () => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<ProjectCreateModal open={val} onClose={toggle} />

			<Button onClick={toggle} type={'button'} view={'action'} size={'l'}>
				<Icon data={Plus} size={16} />
				Создать проект
			</Button>
		</>
	)
}
