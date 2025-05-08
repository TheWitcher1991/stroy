import { Select, SelectOption } from '@gravity-ui/uikit'
import { ZodNativeEnum } from 'zod'

import { GuardOperation, GuardSelectOptions } from '@stroy/models'
import { SelectProps } from '@stroy/types'

export const GuardOperationSelect = ({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<ZodNativeEnum<GuardOperation>>) => {
	return (
		<>
			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={true}
				multiple={true}
				name={'operations'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите операции'}
				options={GuardSelectOptions as SelectOption[]}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
			/>
		</>
	)
}
