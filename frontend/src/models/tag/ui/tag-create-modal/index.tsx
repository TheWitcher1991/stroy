import { TextInput } from '@gravity-ui/uikit'

import { useCreateTag } from '~models/tag'

import { Dialog, FormSection } from '~packages/ui'

export const TagCreateModal = ({ open, onClose }: ModalProps) => {
	const req = useCreateTag()

	const createHandler = async () => {}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={createHandler}
			caption={'Создать тег'}
			loading={req.isPending}
		>
			<FormSection label={'Название'} withOutMargin={true}>
				<TextInput size={'l'} />
			</FormSection>
		</Dialog>
	)
}
