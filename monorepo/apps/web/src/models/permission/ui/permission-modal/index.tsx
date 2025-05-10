import { GuardSelect } from '~models/guard'
import { UserSelect } from '~models/user'

import { PropsWithDocumentId } from '@stroy/models'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const PermissionModal = ({
	document,
	open,
	onClose,
}: ModalProps<PropsWithDocumentId>) => {
	const setHandler = () => {}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={setHandler}
			caption={'Права доступа на документ'}
			size={'s'}
		>
			<FormSection label={'Пользователь'}>
				<UserSelect />
			</FormSection>

			<FormSection label={'Гуард'}>
				<GuardSelect />
			</FormSection>
		</Dialog>
	)
}
