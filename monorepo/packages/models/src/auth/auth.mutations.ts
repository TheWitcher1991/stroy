'use client'

import { href } from '@stroy/href/src'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { AuthRepository } from './auth.repository'
import { logout } from './auth.store'
import { ILogin, ISignup } from './auth.types'

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
	const { mutateAsync } = useMutation({
		mutationFn: () => AuthRepository.logout(),
	})

	return async () => {
		logout()
		window.location.replace(href.login)
		await toast.promise(mutateAsync(undefined), {
			loading: 'Выход...',
			success: 'Выход',
			error: 'Возникла ошибка',
		})
	}
}
