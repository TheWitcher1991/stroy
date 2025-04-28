import { ArrowRightToSquare } from '@gravity-ui/icons'
import { Button, Icon, PasswordInput, TextInput } from '@gravity-ui/uikit'

import href from '~packages/href'
import { FormCard, FormLink, FormSection, Spacing } from '~packages/ui'

export default function LoginForm() {
	return (
		<FormCard title={'Войти'} width={400}>
			<FormSection label={'Email'}>
				<TextInput type={'email'} size={'l'} />
			</FormSection>

			<FormSection label={'Пароль'}>
				<PasswordInput size={'l'} />
			</FormSection>

			<Spacing />

			<Button view={'action'} size={'xl'} type={'submit'} width={'max'}>
				<Icon size={18} data={ArrowRightToSquare} />
				Войти в пространство
			</Button>

			<Spacing />
			<FormLink href={href.signup}>Нет аккаунта?</FormLink>
		</FormCard>
	)
}
