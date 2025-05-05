import { TextInput } from '@gravity-ui/uikit'

import { GuardOperationSelect } from '~models/guard'

import { useCreateGuard } from '@stroy/models'
import { ModalProps } from '@stroy/types'

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
			size={'s'}
		>
			<FormSection label={'Название'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Операции'} withOutMargin={true}>
				<GuardOperationSelect />
			</FormSection>
		</Dialog>
	)
}
