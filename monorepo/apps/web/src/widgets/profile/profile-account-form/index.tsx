import { Button, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
	IUpdateUser,
	PropsWithUser,
	UpdateUserSchema,
	UserRoleMapper,
	useUpdateProfile,
} from '@stroy/models'
import { query } from '@stroy/toolkit'

import { FormCard, FormSection, Spacing } from '~packages/ui'

export default function ProfileAccountForm({ user }: PropsWithUser) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUpdateUser>({
		defaultValues: {
			email: user.email,
			first_name: user.first_name,
			last_name: user.last_name,
			role: user.role,
		},
		resolver: zodResolver(UpdateUserSchema),
	})
	const req = useUpdateProfile()

	useEffect(() => {
		console.log(errors)
	}, [errors])

	const onSubmit = async (data: IUpdateUser) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Профиль обновлен')
		})
	}

	return (
		<FormCard title={'Ваш аккаунт'} width={570}>
			<FormSection label={'Фамилия'}>
				<TextInput
					size={'l'}
					defaultValue={user.last_name}
					error={errors.last_name?.message}
					errorMessage={errors.last_name?.message}
					{...register('last_name')}
				/>
			</FormSection>

			<FormSection label={'Имя'}>
				<TextInput
					size={'l'}
					defaultValue={user.first_name}
					error={errors.first_name?.message}
					errorMessage={errors.first_name?.message}
					{...register('first_name')}
				/>
			</FormSection>

			<FormSection label={'Email'}>
				<TextInput
					type={'email'}
					size={'l'}
					defaultValue={user.email}
					error={errors.email?.message}
					errorMessage={errors.email?.message}
					{...register('email')}
				/>
			</FormSection>

			<FormSection label={'Роль'}>
				<TextInput
					size={'l'}
					defaultValue={UserRoleMapper[user.role]}
					disabled={true}
				/>
			</FormSection>

			<Spacing />
			<Button
				view={'action'}
				size={'l'}
				type={'submit'}
				loading={req.isPending}
				onClick={handleSubmit(onSubmit)}
			>
				Сохранить
			</Button>
		</FormCard>
	)
}
