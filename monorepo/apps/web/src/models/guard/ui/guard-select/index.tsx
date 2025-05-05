import { Plus } from '@gravity-ui/icons'
import { Button, Icon, Select } from '@gravity-ui/uikit'
import { useSelectableGuards } from '@stroy/models'
import { SelectProps } from '@stroy/types'
import { useToggle } from 'ahooks'

import { GuardCreateModal } from '~models/guard'

import { InputSkeleton } from '~packages/ui'

export const GuardSelect = <T = any,>({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<T>) => {
	const { isLoading, guards } = useSelectableGuards()

	const [val, { toggle }] = useToggle(false)

	if (isLoading) {
		return <InputSkeleton />
	}

	return (
		<>
			{val && <GuardCreateModal open={val} onClose={toggle} />}

			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={true}
				name={'guards'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите гуард'}
				options={guards}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
				renderFilter={() => (
					<Button size={'l'} onClick={toggle}>
						<Icon data={Plus} size={16} />
						Добавить гуард
					</Button>
				)}
			/>
		</>
	)
}
