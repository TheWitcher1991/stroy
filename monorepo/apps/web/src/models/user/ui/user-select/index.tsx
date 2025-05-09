import { Plus } from '@gravity-ui/icons'
import { Button, Icon, Select } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { UserCreateModal } from '~models/user'

import { useSelectableUsers } from '@stroy/models'
import { SelectProps } from '@stroy/types'

import { InputSkeleton } from '~packages/ui'

export const UserSelect = <T = any,>({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<T>) => {
	const { isLoading, users } = useSelectableUsers()

	const [val, { toggle }] = useToggle(false)

	if (isLoading) {
		return <InputSkeleton />
	}

	return (
		<>
			{val && <UserCreateModal open={val} onClose={toggle} />}

			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={true}
				name={'users'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите пользователя'}
				options={users}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
				renderFilter={() => (
					<Button size={'l'} onClick={toggle}>
						<Icon data={Plus} size={16} />
						Добавить пользователя
					</Button>
				)}
			/>
		</>
	)
}
