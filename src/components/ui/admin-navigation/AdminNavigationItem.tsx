'use client'

import { adminPageNumber } from '@/store/admin-page/store'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { memo } from 'react'
import { INavigationItem } from './admin-navigation.interface'

interface Props {
	item: INavigationItem
}

function NavigationItem({ item: { title, page } }: Readonly<Props>) {
	const [pageNumber, setPageNumber] = useAtom(adminPageNumber)

	return <li className='inline-block'>
		<button 
			className={cn('cursor-pointer block px-5 py-4 text-lg transition-colors relative text-white text-opacity-60 hover:text-opacity-100 before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-transparent before:transition-colors	before:left-0 before:bottom-0 before:rounded-md border-b-2', {
				['border-primary']: pageNumber === page,
				['border-transparent']: pageNumber !== page,
			})}
			onClick={() => setPageNumber(page)}
		>
			{title}
		</button>
	</li>
}

export const AdminNavigationItem = memo(NavigationItem)