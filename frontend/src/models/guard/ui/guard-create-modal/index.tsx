import { TextInput } from '@gravity-ui/uikit'

import { useCreateGuard } from '~models/guard'

import { Dialog, FormSection } from '~packages/ui'

export const GuardCreateModal = ({ open, onClose }: ModalProps) => {
	const req = useCreateGuard()

	const createHandler = async () => {}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={createHandler}
			caption={'Создать гуард'}
			loading={req.isPending}
		>
			<FormSection label={'Название'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Операции'} withOutMargin={true}></FormSection>
		</Dialog>
	)
}
