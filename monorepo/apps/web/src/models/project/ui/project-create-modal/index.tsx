import { DatePicker } from '@gravity-ui/date-components'
import { TextInput } from '@gravity-ui/uikit'

import { useCreateProject } from '@stroy/models'
import { ModalProps } from '@stroy/types'

import { FULL_WIDTH_STYLE } from '~packages/system'
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
			size={'s'}
		>
			<FormSection label={'Название'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Код'}>
				<TextInput size={'l'} />
			</FormSection>

			<FormSection label={'Начало проекта'}>
				<DatePicker size='l' style={FULL_WIDTH_STYLE} />
			</FormSection>

			<FormSection label={'Конец проекта'}>
				<DatePicker size='l' style={FULL_WIDTH_STYLE} />
			</FormSection>

			<FormSection label={'Тег документов'} withOutMargin={true}>
				<TextInput size={'l'} />
			</FormSection>
		</Dialog>
	)
}
