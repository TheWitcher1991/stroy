import { DatePicker } from '@gravity-ui/date-components'
import { TextInput } from '@gravity-ui/uikit'

import { useCreateProject } from '~models/project'

import { Dialog, FormSection } from '~packages/ui'

export const ProjectCreateModal = ({ open, onClose }: ModalProps) => {
	const req = useCreateProject()

	const createHandler = async () => {}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={createHandler}
			caption={'Создать проект'}
			loading={req.isPending}
		>
			<FormSection label={'Название'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Код'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Начало проекта'}>
				<DatePicker size='l' />
			</FormSection>

			<FormSection label={'Конец проекта'}>
				<DatePicker size='l' />
			</FormSection>

			<FormSection label={'Тег'} withOutMargin={true}>
				<TextInput size={'l'} />
			</FormSection>
		</Dialog>
	)
}
