'use client'

import { Heading } from '@/components/ui/heading/Heading'
import Link from 'next/link'
import { useEffect } from 'react'

interface Props {
	error: Error & { digest?: string}
	reset: () => void
}

export function ServerError({ error, reset }: Readonly<Props>) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return <div className='w-full h-full flex-center flex-col'>
		<Heading title={`${error.digest} - ${error.message}`} className='text-white' />
		<Link replace={true} className='btn-primary px-3 py-2 mt-6 hover:scale-105 transition-transform' href='/' onClick={() => reset()}>Go to Home</Link>
	</div>
}
