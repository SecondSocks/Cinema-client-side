'use client'

import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'
import { userStore } from '@/store/user/store'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

export default function AuthProvider({ 
	children, 
}: { children: ReactNode }) {
	const user = userStore(state => state.user)
	const logout = userStore(state => state.logout)
	const pathname = usePathname()

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) authService.checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = getRefreshToken()

		if (!refreshToken && user) {
			logout()
			authService.logout()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	return !user?.isAdmin && !user ? <>{children}</> : <DynamicCheckRole>
		{children}
	</DynamicCheckRole> 
}
