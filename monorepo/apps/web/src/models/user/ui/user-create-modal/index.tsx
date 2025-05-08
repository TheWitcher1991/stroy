import { PasswordInput, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { GuardSelect } from '~models/guard'
import { UserRoleSelect } from '~models/user'

import {
	CreateUserSchema,
	ICreateUser,
	useCreateUser,
	UserRole,
} from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const UserCreateModal = ({ open, onClose }: ModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		setValue,
	} = useForm<ICreateUser>({
		defaultValues: {
			last_name: '',
			first_name: '',
			email: '',
			password: '',
			role: UserRole.OFFICER,
		},
		resolver: zodResolver(CreateUserSchema),
	})

	const req = useCreateUser()

	const createHandler = async (data: ICreateUser) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Пользователь успешно создан')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(createHandler)}
			caption={'Создать пользователя'}
			loading={req.isPending}
			size={'s'}
		>
			<FormSection label={'Фамилия'}>
				<TextInput
					size={'l'}
					error={errors.last_name?.message}
					errorMessage={errors.last_name?.message}
					{...register('last_name')}
				/>
			</FormSection>

			<FormSection label={'Имя'}>
				<TextInput
					size={'l'}
					error={errors.first_name?.message}
					errorMessage={errors.first_name?.message}
					{...register('first_name')}
				/>
			</FormSection>

			<FormSection label={'Email'}>
				<TextInput
					type={'email'}
					size={'l'}
					error={errors.email?.message}
					errorMessage={errors.email?.message}
					{...register('email')}
				/>
			</FormSection>

			<FormSection label={'Пароль'}>
				<PasswordInput
					size={'l'}
					error={errors.password?.message}
					errorMessage={errors.password?.message}
					{...register('password')}
				/>
			</FormSection>

			<FormSection label={'Роль'}>
				<UserRoleSelect
					defaultValue={UserRole.OFFICER.split(',')}
					errorMessage={errors.role?.message}
					register={register}
					onSelect={value => {
						setValue('role', value.join(','))
						setError('role', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<FormSection label={'Гуард'} withOutMargin={true}>
				<GuardSelect
					errorMessage={errors.guard?.message}
					register={register}
					onSelect={value => {
						setValue('guard', value.join(','))
						setError('guard', {
							message: '',
						})
					}}
				/>
			</FormSection>
		</Dialog>
	)
}
