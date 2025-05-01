import { PasswordInput, TextInput } from '@gravity-ui/uikit'

import { useCreateUser } from '~models/user'

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

			<FormSection label={'Гуард'} withOutMargin={true}></FormSection>
		</Dialog>
	)
}
