import { Select, SelectOption } from '@gravity-ui/uikit'

import { GuardSelectOptions } from '@stroy/models'
import { SelectProps } from '@stroy/types'

export const GuardOperationSelect = <T = any,>({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<T>) => {
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
