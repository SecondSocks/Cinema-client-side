'use client'

import { Heading } from '@/components/ui/heading/Heading'
import { themeStore } from '@/store/theme/store'
import Link from 'next/link'


export function NotFound() {
	const theme = themeStore(state => state.theme)

	return <div className='w-full h-full flex-center flex-col'>
    <Heading 
			title='404 - Page not found'
			theme={theme} 
		/>
    <Link replace={true} className='btn-primary px-3 py-2 mt-6 hover:scale-105 transition-transform' href='/'>Go to Home</Link>
  </div>
}
