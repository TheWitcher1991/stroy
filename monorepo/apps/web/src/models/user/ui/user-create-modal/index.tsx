import { PasswordInput, TextInput } from '@gravity-ui/uikit'

import { GuardSelect } from '~models/guard'

import { useCreateUser } from '@stroy/models'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const UserCreateModal = ({ open, onClose }: ModalProps) => {
	const req = useCreateUser()

	const createHandler = async () => {}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={createHandler}
			caption={'Создать пользователя'}
			loading={req.isPending}
			size={'s'}
		>
			<FormSection label={'Фамилия'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Имя'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Email'}>
				<TextInput type={'email'} size={'l'} />
			</FormSection>

			<FormSection label={'Пароль'}>
				<PasswordInput size={'l'} />
			</FormSection>

			<FormSection label={'Гуард'} withOutMargin={true}>
				<GuardSelect />
			</FormSection>
		</Dialog>
	)
}
