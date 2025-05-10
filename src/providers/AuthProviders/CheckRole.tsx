'use client'

import { userStore } from '@/store/user/store'
import { TypeComponentAuthFields } from '@/types/auth.types'
import { usePathname, useRouter } from 'next/navigation'

export default function CheckRole({ 
	children, 
}: Readonly<TypeComponentAuthFields>) {
	const user = userStore(state => state.user)
	const router = useRouter()
	const pathname = usePathname()

	if (user?.isAdmin) return <>{children}</>

	if (user && !user.isAdmin) return <>{children}</>
	else {
		if (pathname !== '404') router.replace('/auth')
		return null
	}
}
