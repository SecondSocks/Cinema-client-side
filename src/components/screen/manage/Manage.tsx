'use client'

import { adminPageNumber } from '@/store/admin-page/store'
import { useAtomValue } from 'jotai'
import { Statistics } from './statistics/Statistics'

export function Manage() {
	const pageNumber = useAtomValue(adminPageNumber)

	return <>
		{pageNumber === 0 && <Statistics />}
		{pageNumber === 1 && <div>Users</div>}
		{pageNumber === 2 && <div>Movies</div>}
		{pageNumber === 3 && <div>Actors</div>}
		{pageNumber === 4 && <div>Genres</div>}
	</>
}
