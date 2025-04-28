import { LogoStackOverflow } from '@gravity-ui/icons'
import { Button, Icon, PasswordInput, TextInput } from '@gravity-ui/uikit'

import href from '~packages/href'
import { FormCard, FormLink, FormSection, Spacing } from '~packages/ui'

export default function SignupForm() {
	return (
		<FormCard title={'Откройте Stroy'} width={400}>
			<FormSection label={'Фамилия'}>
				<TextInput type={'text'} size={'l'} />
			</FormSection>

			<FormSection label={'Имя'}>
				<TextInput type={'text'} size={'l'} />
			</FormSection>

			<FormSection label={'Название организации'}>
				<TextInput type={'text'} size={'l'} />
			</FormSection>

			<FormSection label={'Email'}>
				<TextInput type={'email'} size={'l'} />
			</FormSection>

			<FormSection label={'Пароль'}>
				<PasswordInput size={'l'} />
			</FormSection>

			<Spacing />

			<Button view={'action'} size={'xl'} type={'submit'} width={'max'}>
				<Icon size={18} data={LogoStackOverflow} />
				Продолжить
			</Button>

			<Spacing />
			<FormLink href={href.login}>Есть аккаунт?</FormLink>
		</FormCard>
	)
}
