import { Button, TextInput } from '@gravity-ui/uikit'

import { useIam, useIamAdmin } from '@stroy/models'

import { FormCard, FormSection, Spacing } from '~packages/ui'

export default function ProfileDepartmentForm() {
	const iam = useIamAdmin()
	const account = useIam()

	return (
		<FormCard title={'Ваш отдел'} width={570}>
			<FormSection label={'Название'}>
				<TextInput
					size={'xl'}
					defaultValue={account.department_name}
					disabled={true}
				/>
			</FormSection>

			<Spacing />
			<Button view={'action'} size={'l'} type={'submit'} disabled={true}>
				Сохранить
			</Button>
		</FormCard>
	)
}
