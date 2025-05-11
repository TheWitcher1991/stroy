import { Button, TextInput } from '@gravity-ui/uikit'

import { PaymentMethodSelect } from '~models/business'

import { FormCard, FormSection, Spacing } from '~packages/ui'

export default function FinancesDeposit() {
	return (
		<FormCard title={'Пополнить баланс'} width={470}>
			<FormSection label={'Сумма'}>
				<TextInput
					type={'number'}
					size={'l'}
					placeholder={'Минимальная сумма пополнения 100 руб.'}
				/>
			</FormSection>

			<FormSection label={'Способ оплаты'}>
				<PaymentMethodSelect />
			</FormSection>

			<Spacing />
			<Button width={'auto'} view={'action'} size={'l'}>
				Пополнить баланс
			</Button>
		</FormCard>
	)
}
