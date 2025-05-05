import { DatePicker } from '@gravity-ui/date-components'
import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
	CreateProjectSchema,
	DocumentStatus,
	ICreateProject,
	useCreateProject,
} from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { DATE_FORMAT, FULL_WIDTH_STYLE } from '~packages/system'
import { Dialog, FormSection } from '~packages/ui'

export const ProjectCreateModal = ({ open, onClose }: ModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateProject>({
		defaultValues: {
			title: '',
			code: '',
			tag: '',
			start_date: '',
			end_date: '',
			status: DocumentStatus.HARMONIZATION,
		},
		resolver: zodResolver(CreateProjectSchema),
	})

	const req = useCreateProject()

	const createHandler = async (data: ICreateProject) => {
		await query(() => {
			req.mutateAsync(data)
			toast.success('Проект успешно создан')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(createHandler)}
			caption={'Создать проект'}
			loading={req.isPending}
			size={'s'}
		>
			<FormSection label={'Название'}>
				<TextInput
					size={'l'}
					error={errors.title?.message}
					errorMessage={errors.title?.message}
					{...register('title')}
				/>
			</FormSection>

			<FormSection label={'Код'}>
				<TextInput
					size={'l'}
					error={errors.code?.message}
					errorMessage={errors.code?.message}
					{...register('code')}
				/>
			</FormSection>

			<FormSection label={'Тег документов'}>
				<TextInput
					size={'l'}
					error={errors.tag?.message}
					errorMessage={errors.tag?.message}
					{...register('tag')}
				/>
			</FormSection>

			<FormSection label={'Начало проекта'}>
				<DatePicker
					size='l'
					style={FULL_WIDTH_STYLE}
					format={DATE_FORMAT}
					validationState={errors.start_date ? 'invalid' : undefined}
					errorMessage={errors.start_date?.message}
					{...register('start_date')}
				/>
			</FormSection>

			<FormSection label={'Конец проекта'} withOutMargin={true}>
				<DatePicker
					size='l'
					style={FULL_WIDTH_STYLE}
					format={DATE_FORMAT}
					validationState={errors.end_date ? 'invalid' : undefined}
					errorMessage={errors.end_date?.message}
					{...register('end_date')}
				/>
			</FormSection>
		</Dialog>
	)
}
