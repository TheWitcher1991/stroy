import {
	ArrowDownToSquare,
	Copy,
	PencilToSquare,
	TrashBin,
} from '@gravity-ui/icons'
import { Button, Flex, Icon } from '@gravity-ui/uikit'

import { PropsWithDocument } from '@stroy/models'

export default function DocumentActions({ document }: PropsWithDocument) {
	return (
		<Flex alignItems={'center'} gap={2}>
			<Button view={'outlined'}>
				<Icon data={ArrowDownToSquare} size={16} />
				Скачать
			</Button>
			<Button view={'outlined'}>
				<Icon data={PencilToSquare} size={16} />
				Изменить
			</Button>
			<Button view={'action'}>
				<Icon data={Copy} size={16} />
				Утвердить
			</Button>
			<Button view={'outlined-danger'}>
				<Icon data={TrashBin} size={16} />
				Удалить
			</Button>
		</Flex>
	)
}
