import { DatePicker } from '@gravity-ui/date-components'
import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
	IUpdateProject,
	PropsWithProject,
	UpdateProjectSchema,
	useUpdateProject,
} from '@stroy/models'
import { formatDate, query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { DATE_FORMAT, FULL_WIDTH_STYLE } from '~packages/system'
import { Dialog, FormSection } from '~packages/ui'

export const ProjectEditModal = ({
	open,
	onClose,
	project,
}: ModalProps<PropsWithProject>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<IUpdateProject>({
		defaultValues: {
			title: project.title,
			code: project.code,
			tag: project.tag,
			start_date: project.start_date,
			end_date: project.end_date,
			status: project.status,
		},
		resolver: zodResolver(UpdateProjectSchema),
	})

	const req = useUpdateProject(project.id)

	const updateHandler = async (data: IUpdateProject) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Проект успешно обновлен')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(updateHandler)}
			caption={'Обновить проект'}
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
					validationState={
						errors.end_date?.message ? 'invalid' : undefined
					}
					errorMessage={errors.start_date?.message}
					onUpdate={data => {
						console.log(data.toDate())
						setValue('start_date', formatDate(data.toDate()))
						setError('start_date', { message: '' })
					}}
					{...register('start_date')}
				/>
			</FormSection>

			<FormSection label={'Конец проекта'} withOutMargin={true}>
				<DatePicker
					size='l'
					style={FULL_WIDTH_STYLE}
					format={DATE_FORMAT}
					validationState={
						errors.end_date?.message ? 'invalid' : undefined
					}
					errorMessage={errors.end_date?.message}
					onUpdate={data => {
						setValue('end_date', formatDate(data.toDate()))
						setError('end_date', { message: '' })
					}}
					{...register('end_date')}
				/>
			</FormSection>
		</Dialog>
	)
}
