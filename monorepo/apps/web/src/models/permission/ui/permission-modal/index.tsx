import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { GuardSelect } from '~models/guard'
import { UserSelect } from '~models/user'

import {
	CreateGuardSchema,
	CreatePermissionSchema,
	ICreateGuard,
	ICreatePermission,
	PropsWithDocumentId,
	useCreatePermission,
} from '@stroy/models'
import { query } from '@stroy/toolkit'
import { ModalProps } from '@stroy/types'

import { Dialog, FormSection } from '~packages/ui'

export const PermissionModal = ({
	document,
	open,
	onClose,
}: ModalProps<PropsWithDocumentId>) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
	} = useForm<ICreatePermission>({
		defaultValues: {
			document,
		},
		resolver: zodResolver(CreatePermissionSchema),
	})

	const req = useCreatePermission()

	const setHandler = async (data: ICreatePermission) => {
		await query(async () => {
			await req.mutateAsync(data)
			toast.success('Права успешно')
			onClose()
		})
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			onClickButtonApply={handleSubmit(setHandler)}
			caption={'Права доступа на документ'}
			size={'s'}
			loading={req.isPending}
		>
			<FormSection label={'Пользователь'}>
				<UserSelect
					errorMessage={errors.user?.message}
					register={register}
					onSelect={value => {
						setValue('user', value.join(','))
						setError('user', {
							message: '',
						})
					}}
				/>
			</FormSection>

			<FormSection label={'Гуард'}>
				<GuardSelect
					errorMessage={errors.guard?.message}
					register={register}
					onSelect={value => {
						setValue('guard', value.join(','))
						setError('guard', {
							message: '',
						})
					}}
				/>
			</FormSection>
		</Dialog>
	)
}
