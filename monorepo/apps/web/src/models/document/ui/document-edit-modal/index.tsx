import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ProjectSelect } from '~models/project'
import { TagSelect } from '~models/tag'

import { useUploadProgress } from '@stroy/hooks'
import {
	IUpdateDocument,
	PropsWithDocument,
	UpdateDocumentSchema,
	useUpdateDocument,
} from '@stroy/models'
import { DOCUMENT_FILE_TYPES } from '@stroy/system'
import { query, splitId } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FileButton, FormSection, QueryProgress } from '~packages/ui'

export const DocumentEditModal = ({
	open,
	onClose,
	document,
}: ModalProps<PropsWithDocument>) => {
	const { uploads, clearUploads, setUploads } = useUploadProgress()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<IUpdateDocument>({
		defaultValues: {
			title: document.title,
			project: document.project.id,
			tag: document.tag?.id,
		},
		resolver: zodResolver(UpdateDocumentSchema),
	})

	const req = useUpdateDocument(document.id)

	const updateHandler = async (data: IUpdateDocument) => {
		const formData = new FormData()

		formData.append('title', data.title)
		formData.append('project', data.project)
		formData.append('tag', data.tag)
		if (data.file) formData.append('file', data.file)

		await query(async () => {
			await req.mutateAsync({
				data: data as FormData,
				onUploadProgress: (progress, uploaded, total) => {
					setUploads({
						progress,
						uploaded,
						total,
					})
				},
			})
			clearUploads()
			toast.success('Документ успешно обновлен')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(updateHandler)}
			caption={'Обновить документ'}
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

			<FormSection label={'Проект'}>
				<ProjectSelect
					defaultValue={splitId(document.project.id)}
					errorMessage={errors.project?.message}
					register={register}
					onSelect={value => {
						setValue('project', Number(value.join(',')))
						setError('project', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<FormSection label={'Тег'}>
				<TagSelect
					defaultValue={splitId(document.tag?.id)}
					errorMessage={errors.tag?.message}
					register={register}
					onSelect={value => {
						setValue('tag', Number(value.join(',')))
						setError('tag', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<FormSection label={'Файл'} withOutMargin={true}>
				<FileButton
					name={'file'}
					accept={DOCUMENT_FILE_TYPES}
					errorMessage={errors.file?.message}
					register={register}
					onChange={file => {
						setValue('file', file)
						setValue('title', file.name)
						setError('file', {
							message: '',
						})
						setError('title', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<QueryProgress
				loading={req.isPending}
				value={uploads.progress}
				total={uploads.total}
				uploaded={uploads.uploaded}
			/>
		</Dialog>
	)
}
