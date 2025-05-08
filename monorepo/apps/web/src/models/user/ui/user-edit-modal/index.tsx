import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { GuardSelect } from '~models/guard'
import { UserRoleSelect } from '~models/user'

import {
	IUpdateUser,
	PropsWithUser,
	UpdateUserSchema,
	useUpdateUser,
} from '@stroy/models'
import { query, splitId } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const UserEditModal = ({
	user,
	open,
	onClose,
}: ModalProps<PropsWithUser>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		setValue,
	} = useForm<IUpdateUser>({
		defaultValues: {
			last_name: user.last_name,
			first_name: user.first_name,
			email: user.email,
			role: user.role,
			guard: user.guard?.id,
		},
		resolver: zodResolver(UpdateUserSchema),
	})

	const req = useUpdateUser(user.id)

	const createHandler = async (data: IUpdateUser) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Пользователь успешно обновлен')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(createHandler)}
			caption={'Обновить пользователя'}
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

			<FormSection label={'Роль'}>
				<UserRoleSelect
					defaultValue={user.role.split(',')}
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
					defaultValue={splitId(user.guard?.id)}
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
