'use client'

import { MaterialIcon } from "@/components/ui/MaterialIcon"
import cn from 'clsx'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IMenuItem } from "./Menu.interface"
import styles from './Menu.module.scss'

interface Props {
  item: IMenuItem
  theme: 'dark' | 'light'
}

export function MenuItem({item, theme}: Readonly<Props>) {
  const pathname = usePathname()

  return <li className={cn('px-8 border-r-4 border-r-transparent transition-colors', {
    [styles.active]: pathname === item.link
  })} >
    <Link 
      href={item.link} 
      className={cn('flex items-center transition-colors px-3 mt-6 cursor-pointer', {
        ['text-gray-600']: theme === 'dark',
        ['text-black/70']: theme === 'light'
      })}
    >
      <MaterialIcon name={item.icon} className='text-2lg transition-colors' />
      <span 
        className={cn('ml-3 text-lg transition-colors', {
          ['text-white']: pathname === item.link && theme === 'dark',
          ['text-black']: pathname === item.link && theme === 'light',
          ['hover:text-white']: theme === 'dark',
          ['hover:text-black']: theme === 'light',
        })}
      >{item.title}</span>
    </Link>
  </li>
}

