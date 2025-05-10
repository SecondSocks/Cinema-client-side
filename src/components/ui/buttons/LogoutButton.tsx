'use client'

import { authService } from '@/services/auth/auth.service'
import { themeStore } from '@/store/theme/store'
import { userStore } from '@/store/user/store'
import cn from 'clsx'
import Link from 'next/link'
import { MouseEvent } from 'react'
import { MaterialIcon } from '../MaterialIcon'

export function LogoutButton() {
  const logout = userStore(state => state.logout)
  const theme = themeStore(state => state.theme)

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    authService.logout()
    logout()
  }

  return <li className='px-8 border-r-4 border-r-transparent transition-colors'>
    <Link 
      href='#' 
      onClick={handleLogout} 
      className={cn('flex items-center transition-colors px-3 mt-6 cursor-pointer', {
        ['text-gray-600']: theme === 'dark',
        ['text-black/70']: theme === 'light'
      })}>
      <MaterialIcon name='MdLogout' className='text-2lg transition-colors' />
        <span 
          className={cn('ml-3 text-lg transition-colors', {
            ['hover:text-white']: theme === 'dark',
            ['hover:text-black']: theme === 'light',
          })}
        >Logout</span>
    </Link>
  </li>
}

