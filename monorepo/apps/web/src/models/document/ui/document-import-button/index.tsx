import { ArrowUpFromSquare } from '@gravity-ui/icons'
import { Button, Icon } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { DocumentImportModal } from '~models/document'

export const DocumentImportButton = () => {
	const [val, { toggle }] = useToggle(false)

	return (
		<>
			<DocumentImportModal open={val} onClose={toggle} />

			<Button view={'action'} onClick={toggle}>
				<Icon data={ArrowUpFromSquare} size={16} />
				Импорт документа
			</Button>
		</>
	)
}
