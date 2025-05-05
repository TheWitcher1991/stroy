import { Plus } from '@gravity-ui/icons'
import { Button, Icon, Select } from '@gravity-ui/uikit'
import { useToggle } from 'ahooks'

import { TagCreateModal } from '~models/tag'

import { useSelectableTags } from '@stroy/models'
import { SelectProps } from '@stroy/types'

import { InputSkeleton } from '~packages/ui'

export const TagSelect = <T = any,>({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<T>) => {
	const { isLoading, tags } = useSelectableTags()

	const [val, { toggle }] = useToggle(false)

	if (isLoading) {
		return <InputSkeleton />
	}

	return (
		<>
			{val && <TagCreateModal open={val} onClose={toggle} />}

			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={true}
				name={'tags'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите тег'}
				options={tags}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
				renderFilter={() => (
					<Button size={'l'} onClick={toggle}>
						<Icon data={Plus} size={16} />
						Добавить тег
					</Button>
				)}
			/>
		</>
	)
}
