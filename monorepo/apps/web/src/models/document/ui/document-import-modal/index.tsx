import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ProjectSelect } from '~models/project'
import { TagSelect } from '~models/tag'

import { useUploadProgress } from '@stroy/hooks'
import {
	CreateDocumentSchema,
	ICreateDocument,
	useCreateDocumentFormData,
} from '@stroy/models'
import { DOCUMENT_FILE_TYPES } from '@stroy/system'
import { ModalProps } from '@stroy/types'

import { Dialog, FileButton, FormSection, QueryProgress } from '~packages/ui'

export const DocumentImportModal = ({ open, onClose }: ModalProps) => {
	const { uploads, clearUploads, setUploads } = useUploadProgress()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<ICreateDocument>({
		defaultValues: {
			title: '',
		},
		resolver: zodResolver(CreateDocumentSchema),
	})

	const req = useCreateDocumentFormData()

	const importHandler = async (data: ICreateDocument) => {
		const formData = new FormData()

		formData.append('title', data.title)
		formData.append('project', data.project)
		formData.append('tag', data.tag)
		formData.append('file', data.file)

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
		toast.success('Создана новая музыка')
		onClose()
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(importHandler)}
			caption={'Импорт документа'}
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
					errorMessage={errors.project?.message}
					register={register}
					onSelect={value => {
						setValue('project', value.join(','))
						setError('project', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<FormSection label={'Тег'}>
				<TagSelect
					errorMessage={errors.tag?.message}
					register={register}
					onSelect={value => {
						setValue('tag', value.join(','))
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
