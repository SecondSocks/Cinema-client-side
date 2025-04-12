'use client'

import { Spinner } from '@/components/ui/loaders/Spinner'
import { themeStore } from '@/store/theme/store'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
	children: ReactNode
}

export function ThemeGate({ children }: Readonly<Props>) {
	const hasHydrated = themeStore(state => state.hasHydrated)
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		if (hasHydrated) setIsReady(true)
	}, [hasHydrated])

	if (!isReady) return <Spinner /> 
	return <>{children}</>
}
