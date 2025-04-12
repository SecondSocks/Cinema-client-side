'use client'

import { MaterialIcon } from '../MaterialIcon'

export function Spinner() {

	return <div className='w-screen h-screen flex-center'>
		<MaterialIcon name='MdAutorenew' className='animate-spin w-12 h-12'  />
	</div>
}
