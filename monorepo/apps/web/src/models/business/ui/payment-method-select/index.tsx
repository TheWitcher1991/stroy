import { Select, SelectOption } from '@gravity-ui/uikit'
import { ZodNativeEnum } from 'zod'

import { PaymentMethod, PaymentMethodOptions } from '@stroy/models'
import { SelectProps } from '@stroy/types'

export const PaymentMethodSelect = ({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<ZodNativeEnum<PaymentMethod>>) => {
	return (
		<>
			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={false}
				multiple={false}
				name={'payment_method'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите способ оплаты'}
				options={PaymentMethodOptions as SelectOption[]}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
			/>
		</>
	)
}
