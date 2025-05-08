import { TextInput } from '@gravity-ui/uikit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { GuardOperationSelect } from '~models/guard'

import {
	IUpdateGuard,
	PropsWithGuard,
	UpdateGuardSchema,
	useUpdateGuard,
} from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const GuardEditModal = ({
	open,
	onClose,
	guard,
}: ModalProps<PropsWithGuard>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<IUpdateGuard>({
		defaultValues: {
			title: guard.title,
			operations: guard.permissions,
		},
		resolver: zodResolver(UpdateGuardSchema),
	})

	const req = useUpdateGuard(guard.id)

	const updateHandler = async (data: IUpdateGuard) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Гуард успешно обновлен')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(updateHandler)}
			caption={'Обновить гуард'}
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
				<GuardOperationSelect
					name={'operations'}
					defaultValue={guard.permissions}
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
