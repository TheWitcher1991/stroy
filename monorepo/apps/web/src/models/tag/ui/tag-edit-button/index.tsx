import { PencilToSquare } from '@gravity-ui/icons'
import { useToggle } from 'ahooks'

import { TagEditModal } from '~models/tag'

import { PropsWithTag } from '@stroy/models'

import { Action } from '~packages/ui'

export const TagEditButton = ({
	tag,
	onlyIcon,
}: PropsWithAction<PropsWithTag>) => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<TagEditModal tag={tag} open={val} onClose={toggle} />

			<Action icon={PencilToSquare} onlyIcon={onlyIcon} onClick={toggle}>
				Изменить
			</Action>
		</>
	)
}
