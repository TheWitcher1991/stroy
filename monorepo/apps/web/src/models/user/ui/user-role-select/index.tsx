import { Select, SelectOption } from '@gravity-ui/uikit'
import { ZodNativeEnum } from 'zod'

import { UserRole, UserRoleOptions } from '@stroy/models'
import { SelectProps } from '@stroy/types'

export const UserRoleSelect = ({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<ZodNativeEnum<UserRole>>) => {
	return (
		<>
			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={true}
				name={'role'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите роль'}
				options={UserRoleOptions as SelectOption[]}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
			/>
		</>
	)
}
