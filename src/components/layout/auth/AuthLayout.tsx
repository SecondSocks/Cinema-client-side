'use client'

import { useAuthRedirect } from '@/app/auth/useAuthRedirect'
import { THEMES } from '@/config/theme.config'
import { themeStore } from '@/store/theme/store'
import cn from 'clsx'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function AuthLayout({ children }: Readonly<Props>) {
	useAuthRedirect()

	const theme = themeStore(state => state.theme)
	const router = useRouter()

	return <div className={cn('relative transition-colors h-screen flex flex-col', {
		[`${THEMES[theme].bg} text-[#fefefe]`]: theme === 'dark',
		[`${THEMES[theme].bg} text-[#020202]`]: theme === 'light'
	})}>
		<button 
			className='btn-primary absolute top-5 left-5 px-2 py-1'
			onClick={() => router.back()}
		>{'< Back'}</button>
		{children}
	</div>
}
