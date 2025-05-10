'use client'

import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { userStore } from '@/store/user/store'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export default function ManageLayout({ children }: Readonly<Props>) {
	const user = userStore(state => state.user)

	if (!user?.isAdmin) redirect('/')

	return <>
		<AdminNavigation />
		{children}
	</>
}