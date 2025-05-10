'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { Layout } from './Layout'

interface Props {
	children: ReactNode
}

export function LayoutWrapper({ children }: Readonly<Props>) {
	const pathname = usePathname()

	const isAuthPage = pathname === '/auth/login' || pathname === '/auth/register'

	return isAuthPage ? children : <Layout>{children}</Layout>
}
