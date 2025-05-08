import { TextArea, TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
	IUpdateTag,
	PropsWithTag,
	UpdateTagSchema,
	useUpdateTag,
} from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const TagEditModal = ({
	open,
	onClose,
	tag,
}: ModalProps<PropsWithTag>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUpdateTag>({
		defaultValues: {
			title: tag.title,
			summary: tag.summary,
			color: tag.color,
		},
		resolver: zodResolver(UpdateTagSchema),
	})

	const req = useUpdateTag(tag.id)

	const updateHandler = async (data: IUpdateTag) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Тег успешно обновлен')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(updateHandler)}
			caption={'Обновить тег'}
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
