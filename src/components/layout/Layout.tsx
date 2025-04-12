'use client'

import { THEMES } from '@/config/theme.config'
import { themeStore } from '@/store/theme/store'
import cn from 'clsx'
import { ReactNode } from 'react'
import { Navigation } from './navigation/Navigation'
import { Sidebar } from './sidebar/Sidebar'

export function Layout({ children }: Readonly<{ children: ReactNode }>) {
  const theme = themeStore(state => state.theme)

  return <div className={cn('relative transition-colors', {
    [`${THEMES[theme].bg} text-[#fefefe]`]: theme === 'dark',
    [`${THEMES[theme].bg} text-[#020202]`]: theme === 'light'
  })}>
    <Navigation className='fixed top-0 bottom-0 overflow-y-scroll w-1/5 max-w-[350px] left-0 border-r border-r-gray-800' />
    <main className='min-h-screen p-layout my-0 mx-[20%]'>
      {children}
    </main>
    <Sidebar className='fixed top-0 bottom-0 overflow-y-scroll w-1/5 max-w-[350px] right-0 border-l border-l-gray-800 p-layout' />
  </div>
}
