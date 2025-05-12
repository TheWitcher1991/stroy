import { Button, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { PaymentMethodSelect } from '~models/business'

import {
	DepositSchema,
	IDeposit,
	PayerType,
	PaymentMethod,
	useDeposit,
	useIam,
} from '@stroy/models'
import { query } from '@stroy/toolkit'

import { FormCard, FormSection, Spacing } from '~packages/ui'

export default function FinancesDeposit() {
	const account = useIam()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<IDeposit>({
		defaultValues: {
			amount: '0',
			payment_method: PaymentMethod.CARD,
			payer_type: PayerType.INDIVIDUAL,
			department: account.department,
		},
		resolver: zodResolver(DepositSchema),
	})

	const req = useDeposit()

	const onSubmit = async (data: IDeposit) => {
		await query(async () => {
			const res = await req.mutateAsync(data)

			if (res && res.data.confirmation_url) {
				window.location.href = res.data.confirmation_url
			}
		})
	}

	return (
		<FormCard title={'Пополнить баланс'} width={470}>
			<FormSection label={'Сумма'}>
				<TextInput
					type={'number'}
					size={'l'}
					placeholder={'Минимальная сумма пополнения 100 руб.'}
					error={errors.amount?.message}
					errorMessage={errors.amount?.message}
					{...register('amount')}
				/>
			</FormSection>

			<FormSection label={'Способ оплаты'}>
				<PaymentMethodSelect
					errorMessage={errors.payment_method?.message}
					register={register}
					onSelect={value => {
						setValue('payment_method', value.join(','))
						setError('payment_method', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<Spacing />
			<Button
				width={'auto'}
				view={'action'}
				size={'l'}
				onClick={handleSubmit(onSubmit)}
			>
				Пополнить баланс
			</Button>
		</FormCard>
	)
}
