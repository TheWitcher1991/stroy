import { Plus } from '@gravity-ui/icons'
import { Button, Icon, Select } from '@gravity-ui/uikit'
import { useSelectableProjects } from '@stroy/models'
import { SelectProps } from '@stroy/types'
import { useToggle } from 'ahooks'

import { ProjectCreateModal } from '~models/project'

import { InputSkeleton } from '~packages/ui'

export const ProjectSelect = <T = any,>({
	defaultValue,
	value,
	errorMessage,
	onSelect,
}: SelectProps<T>) => {
	const { isLoading, projects } = useSelectableProjects()

	const [val, { toggle }] = useToggle(false)

	if (isLoading) {
		return <InputSkeleton />
	}

	return (
		<>
			{val && <ProjectCreateModal open={val} onClose={toggle} />}

			<Select
				defaultValue={defaultValue}
				value={value}
				hasClear={true}
				name={'projects'}
				errorMessage={errorMessage}
				width={'max'}
				size={'l'}
				filterable={true}
				placeholder={'Выберите проект'}
				options={projects}
				onUpdate={onSelect}
				validationState={errorMessage ? 'invalid' : undefined}
				renderFilter={() => (
					<Button size={'l'} onClick={toggle}>
						<Icon data={Plus} size={16} />
						Добавить проект
					</Button>
				)}
			/>
		</>
	)
}
