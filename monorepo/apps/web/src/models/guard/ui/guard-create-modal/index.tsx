import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ZodNativeEnum } from 'zod'

import { GuardOperationSelect } from '~models/guard'

import {
	CreateGuardSchema,
	GuardOperation,
	ICreateGuard,
	useCreateGuard,
} from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const GuardCreateModal = ({ open, onClose }: ModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<ICreateGuard>({
		defaultValues: {
			title: '',
			operations: '',
		},
		resolver: zodResolver(CreateGuardSchema),
	})

	const req = useCreateGuard()

	const createHandler = async (data: ICreateGuard) => {
		await query(() => {
			req.mutateAsync(data)
			toast.success('Гуард успешно создан')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(createHandler)}
			caption={'Создать гуард'}
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

			<FormSection label={'Операции'} withOutMargin={true}>
				<GuardOperationSelect<ZodNativeEnum<GuardOperation>>
					name={'operations'}
					errorMessage={errors.operations?.message}
					register={register}
					onSelect={value => {
						setValue('operations', value)
						setError('operations', {
							message: '',
						})
					}}
				/>
			</FormSection>
		</Dialog>
	)
}
