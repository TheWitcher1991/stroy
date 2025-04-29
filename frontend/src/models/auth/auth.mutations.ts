'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { AuthRepository } from '~models/auth/auth.repository'
import { logout } from '~models/auth/auth.store'
import { ILogin, ISignup } from '~models/auth/auth.types'

export const useLogin = () => {
	return useMutation({
		mutationFn: (data: ILogin) => AuthRepository.login(data),
	})
}

export const useSignup = () => {
	return useMutation({
		mutationFn: (data: ISignup) => AuthRepository.signup(data),
	})
}

export const useRefresh = () => {
	return useMutation({
		mutationFn: () => AuthRepository.refresh(),
	})
}

export const useLogout = () => {
	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationFn: () => AuthRepository.logout(),
	})

	return async () => {
		logout()
		router.replace(links.login)
		await toast.promise(mutateAsync(undefined), {
			loading: 'Выход...',
			success: 'Выход',
			error: 'Возникла ошибка',
		})
	}
}
