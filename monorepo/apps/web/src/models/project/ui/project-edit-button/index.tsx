import { PencilToSquare } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { ProjectEditModal } from '~models/project'

import { PropsWithProject } from '@stroy/models'

import { Action } from '~packages/ui'

export const ProjectEditButton = ({
	project,
	onlyIcon,
}: PropsWithAction<PropsWithProject>) => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<ProjectEditModal project={project} open={val} onClose={toggle} />

			<Action icon={PencilToSquare} onlyIcon={onlyIcon} onClick={toggle}>
				Изменить
			</Action>
		</>
	)
}
