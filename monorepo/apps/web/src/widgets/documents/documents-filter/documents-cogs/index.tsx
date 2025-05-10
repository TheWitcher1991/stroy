import { Sliders } from '@gravity-ui/icons'
import { Button, DropdownMenu, Icon } from '@gravity-ui/uikit'

import { useDocumentsStore } from '~widgets/documents'

export function DocumentsCogs() {
	const { loading, filter } = useDocumentsStore()

	return (
		<>
			<DropdownMenu
				renderSwitcher={props => (
					<Button
						{...props}
						view={'outlined'}
						size={'m'}
						disabled={loading}
					>
						Фильтр
						<Icon data={Sliders} size={16} />
					</Button>
				)}
				disabled={loading}
				size={'m'}
				items={[]}
			/>
		</>
	)
}
