'use client'

import { ArrowRightToSquare } from '@gravity-ui/icons'
import { Button, Icon, PasswordInput, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { href } from '@stroy/href'
import { ILogin, login, LoginSchema, useLogin } from '@stroy/models'
import { query } from '@stroy/toolkit'

import { FormCard, FormLink, FormSection, Spacing } from '~packages/ui'

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		defaultValues: {
			email: 'alikzoy@gmail.com',
			password: '12345678',
		},
		resolver: zodResolver(LoginSchema),
	})

	const req = useLogin()

	const onSubmit = async (data: ILogin) => {
		await query(async () => {
			const res = await req.mutateAsync(data)
			login(res.data)
			window.location.replace(href.workspace)
		})
	}

	return (
		<FormCard title={'Войти'} width={400}>
			<FormSection label={'Email'}>
				<TextInput
					type={'email'}
					error={errors.email?.message}
					errorMessage={errors.email?.message}
					size={'l'}
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

			<Spacing />

			<Button
				view={'action'}
				size={'xl'}
				type={'submit'}
				width={'max'}
				loading={req.isPending}
				onClick={handleSubmit(onSubmit)}
			>
				<Icon size={18} data={ArrowRightToSquare} />
				Войти в пространство
			</Button>

			<Spacing />
			<FormLink href={href.signup}>Нет аккаунта?</FormLink>
		</FormCard>
	)
}
