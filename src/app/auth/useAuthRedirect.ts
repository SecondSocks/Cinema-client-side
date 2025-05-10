'use client'

import { userStore } from '@/store/user/store'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function useAuthRedirect() {
	const user = userStore(state => state.user)
	
	const { push } = useRouter()
	const searchParams = useSearchParams()

	const redirect = searchParams.get('redirect') ?? '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}