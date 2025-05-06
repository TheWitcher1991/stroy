import { TextArea, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { CreateTagSchema, ICreateTag, useCreateTag } from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const TagCreateModal = ({ open, onClose }: ModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateTag>({
		defaultValues: {
			title: '',
			summary: '',
			color: '#d8ff75',
		},
		resolver: zodResolver(CreateTagSchema),
	})

	const req = useCreateTag()

	const createHandler = async (data: ICreateTag) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Тег успешно создан')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(createHandler)}
			caption={'Создать тег'}
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

			<FormSection label={'Цвет'}>
				<TextInput
					size={'l'}
					error={errors.color?.message}
					errorMessage={errors.color?.message}
					{...register('color')}
				/>
			</FormSection>

			<FormSection label={'Краткое описание'}>
				<TextArea
					size={'l'}
					error={errors.summary?.message}
					errorMessage={errors.summary?.message}
					{...register('summary')}
				/>
			</FormSection>
		</Dialog>
	)
}
