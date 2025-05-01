import { LogoStackOverflow } from '@gravity-ui/icons'
import { Button, Icon, PasswordInput, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ISignup, SignupSchema, useSignup } from '~models/auth'

import href from '~packages/href'
import { query } from '~packages/lib'
import { FormCard, FormLink, FormSection, Spacing } from '~packages/ui'

export default function SignupForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignup>({
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			department_name: '',
		},
		resolver: zodResolver(SignupSchema),
	})

	const req = useSignup()

	const onSubmit = async (data: ISignup) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Вы успешно зарегистрировались')
			router.replace(href.login)
		})
	}

	return (
		<FormCard title={'Откройте Stroy'} width={400}>
			<FormSection label={'Фамилия'}>
				<TextInput
					type={'text'}
					error={errors.last_name?.message}
					errorMessage={errors.last_name?.message}
					size={'l'}
					{...register('last_name')}
				/>
			</FormSection>

			<FormSection label={'Имя'}>
				<TextInput
					type={'text'}
					error={errors.first_name?.message}
					errorMessage={errors.first_name?.message}
					size={'l'}
					{...register('first_name')}
				/>
			</FormSection>

			<FormSection label={'Название организации'}>
				<TextInput
					type={'text'}
					error={errors.department_name?.message}
					errorMessage={errors.department_name?.message}
					size={'l'}
					{...register('department_name')}
				/>
			</FormSection>

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
				<Icon size={18} data={LogoStackOverflow} />
				Продолжить
			</Button>

			<Spacing />
			<FormLink href={href.login}>Есть аккаунт?</FormLink>
		</FormCard>
	)
}
