'use client'

import { authService } from '@/services/auth/auth.service'
import { userStore } from '@/store/user/store'
import { IAuthLogin, IAuthRegister } from '@/types/auth.types'
import { IUser } from '@/types/user.types'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useRegister() {
	const login = userStore(state => state.login)

	const { mutate, isPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthRegister) => authService.register(data), 
		onSuccess: (data) => { 
			const user: IUser = {
				id: data.user.id,
				name: data.user.name,
				email: data.user.email,
				isAdmin: data.user.isAdmin,
				createdAt: data.user.createdAt
			}
			login(user)
			toast.success('Register', {
				description: 'You have successfully register'
			})
		},
		onError: () => {
			toast.error('Register', { 
				description: 'User with this email already exists' 
			})
		},
	})

	return { register: mutate, isRegister: isPending }
}

export function useLogin() {
	const login = userStore(state => state.login)

	const { mutate, isPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IAuthLogin) => authService.login(data),
		onSuccess: (data) => {
			const user: IUser = {
				id: data.user.id,
				name: data.user.name,
				email: data.user.email,
				isAdmin: data.user.isAdmin,
				createdAt: data.user.createdAt
			}
			login(user)
			toast.success('Login', {
				description: 'You have successfully login'
			})
		},
		onError: () => {
			toast.error('Login', {
				description: 'User not found'
			})
		}
	})

	return { login: mutate, isLogin: isPending }
}