'use client'

import Input from '@/components/ui/fields/Input'
import { Heading } from '@/components/ui/heading/Heading'
import { useLogin } from '@/hooks/useAuth'
import { IAuthLogin } from '@/types/auth.types'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export function Login() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IAuthLogin>({
		mode: 'onChange'
	})
	const { login, isLogin } = useLogin()
	const { replace } = useRouter()

	const onSubmit: SubmitHandler<IAuthLogin> = data => {
		login(data)
		reset()
		replace('/')
	}

	return <div className='flex-center h-full flex-col'>
		<Image 
			src='/icon.svg' 
			alt='Logo' 
			width={50} 
			height={50} 
			className='mb-5 shadow-2xl shadow-primary rounded-full' 
		/>
		<Heading 
			title='Yooo, welcome back!' 
			className='text-4xl mb-2' 
			size='4xl' 
		/>
		<span className='flex gap-2'>
			<p className='text-gray-400'>First time here?</p> 
			<span className='relative group'>
				<Link 
					href='/auth/register'
					className='after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100'
				>Sign up for free</Link>
			</span>
		</span>
		<form 
			onSubmit={handleSubmit(onSubmit)}
			className='flex-center flex-col'
		>
			<Input 
				placeholder='Your email' 
				{...register('email', { 
					required: {
						value: true,
						message: 'Email is required'
					},
					pattern: {
						value: /^[a-zA-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Invalid email address'
					}
			})} 
				error={errors.email?.message} 
				className={cn('w-85 py-2 px-3 border outline-none rounded-xl mt-10  transition-colors', {
					['border-gray-400 focus:border-white hover:border-white']: !errors['email'],
					['border-red-700 focus:border-red-700']: !!errors['email']
				})}
			/>
			<Input 
				placeholder='Your password' 
				type='password' 
				{...register('password', { 
					required: {
						value: true,
						message: 'Password is required'
					},
					minLength: {
						value: 6,
						message: 'Password must be at least 6 characters'
					} 
				})} 
				error={errors.password?.message}
				className={cn('w-85 py-2 px-3 border outline-none rounded-xl mt-5 transition-colors', {
					['border-gray-400 focus:border-white hover:border-white']: !errors['password'],
					['border-red-700 focus:border-red-700']: !!errors['password']
				})} 
			/>
			<button 
				className={cn('btn-primary w-85 px-3 py-2 mt-5 hover:animate-popUp transition-transform cursor-pointer', {
					['opacity-50 cursor-not-allowed']: isLogin
				})}
				disabled={isLogin}
			>Sign in</button>
		</form>
	</div>
}
